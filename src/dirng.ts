import { Pulse, Chain, Resolver, ChainResolver, PulseIndex, IntoCid, fromJSON, crawl, along, IntoResolvePulseQuery } from '@twine-protocol/twine-core'
import { HttpStore } from '@twine-protocol/twine-http-store'
import type { FetchOptions } from 'itty-fetcher'
import { extractRandomness } from './extract-randomness'
import { ByteHelper, byteHelper } from './byte-helper'
import { timeToNext, wait } from './timing'
import CHAINS from './chains'
import { CURBY_API_URL } from './common'
import { FetcherType, fetcher } from 'itty-fetcher'
import { pipeline, filter, take, collect, map } from 'streaming-iterables'
import { sha3512, shake256 } from './hash'
import { WaitOptions } from './common'

const POLL_DELAY = 60 * 1000

export type Validation = {
  ok: boolean,
  reason?: string,
}

export type RoundValidations = {
  bellResponse: Validation | null,
  seedOrdering: Validation | null,
  seed: Validation | null,
}

export type RoundData = {
  round: number,
  randomness: ByteHelper | null,
  chain: Chain,
  pulses: {
    result: Pulse | null,
    request: Pulse,
    precommit: Pulse | null,
    error: Pulse | null,
  },
  validations: RoundValidations,
  error: Error | null,
  isComplete: boolean,
  isOk: boolean,
  stage: string,
}

const assert = (condition: boolean, message: string) => {
  if (!condition) {
    throw new Error(message)
  }
}

async function findBellResponsePulse(round: RoundData, resolver: Resolver, options = { maxDepth: 10 }) {
  const precommit = round.pulses.precommit
  if (!precommit) {
    throw new Error('No precommit pulse found')
  }
  const request = round.pulses.request
  const dataHash = precommit.value.content.payload.dataHash
  const bellRootQuery = precommit.value.content.mixins.find(m => m.chain.toString() === CHAINS.bell)
  if (!bellRootQuery) {
    throw new Error('Not mixing in with bell chain!')
  }
  const match = await pipeline(
    () => crawl(bellRootQuery, along()),
    take(options?.maxDepth ?? 10),
    map((next) => next.load(resolver)),
    map(({ pulse }) => pulse),
    filter<Pulse>((pulse) => {
      const payload = pulse.value.content.payload
      if (!payload.dataHash) {
        return false
      }
      return payload.ref.toString() === request.cid.toString() &&
        payload.dataHash === dataHash
    }),
    take(1),
    collect
  )
  if (!match) {
    throw new Error('No bell response found for precommit pulse')
  }
  return match[0]!
}

async function findSeedPulse(round: RoundData, resolver: Resolver, options = { maxDepth: 10 }) {
  const precommit = round.pulses.precommit
  if (!precommit) {
    throw new Error('No precommit pulse found')
  }
  const result = round.pulses.result
  if (!result) {
    throw new Error('No result pulse found')
  }
  const seedChain = precommit.value.content.payload.seedChain
  const seedQuery = result.value.content.mixins.find(m => m.chain.toString() === seedChain.toString())
  if (!seedQuery) {
    throw new Error('No seed chain mixin found in result pulse')
  }
  const strand = await pipeline(
    () => crawl(seedQuery, along()),
    take(options?.maxDepth ?? 10),
    map((next) => next.load(resolver)),
    map(({ pulse }) => pulse),
    filter<Pulse>((pulse) => {
      const mixins = pulse.value.content.mixins
      return mixins.some(m => {
        return m.value.toString() === precommit.cid.toString()
      })
    }),
    take(1),
    collect
  )
  const rule = precommit.value.content.payload.rule
  const seed = strand.at(-rule.count)
  if (!seed) {
    throw new Error('No seed pulse found')
  }
  return seed
}

export async function validateBellResponse(round: RoundData, resolver: Resolver): Promise<Validation> {
  try {
    assert(round.isComplete, 'Round is not complete')
    const bellResponse = await findBellResponsePulse(round, resolver)
    return { ok: true }
  } catch (err: any) {
    return { ok: false, reason: err.message }
  }
}

export async function validateSeedOrdering(round: RoundData, resolver: Resolver): Promise<Validation> {
  try {
    assert(round.isComplete, 'Round is not complete')
    const seed = await findSeedPulse(round, resolver)
    return { ok: true }
  } catch (err: any) {
    return { ok: false, reason: err.message }
  }
}

export async function validateSeed(round: RoundData, resolver: Resolver, params: any): Promise<Validation> {
  try {
    assert(round.isComplete, 'Round is not complete')
    const seed = await findSeedPulse(round, resolver)
    // seed pulse is after precommit and before result
    const hashfn = round.pulses.precommit!.value.content.payload.seedAlgorithm
    assert(hashfn === 'shake256', 'Unsupported seed algorithm')
    // check params.seed corresponds to seed pulse
    const seedLength = round.pulses.precommit!.value.content.payload.seedLength
    const seedBytes = await shake256([seed.cid.multihash.digest], 'B64', { outputLen: seedLength })
    assert(seedBytes === params.seed, 'Seed mismatch')
    return { ok: true }
  } catch (err: any) {
    return { ok: false, reason: err.message }
  }
}

export async function withValidations(round: RoundData, resolver: Resolver, params?: any): Promise<RoundData> {
  const bellResponse = round.validations.bellResponse ?? await validateBellResponse(round, resolver)
  const seedOrdering = round.validations.seedOrdering ?? await validateSeedOrdering(round, resolver)
  const seed = round.validations.seed ?? (params ? await validateSeed(round, resolver, params) : null)
  const isOk = round.isOk && bellResponse.ok && seedOrdering.ok && (!seed || seed.ok)
  const out = {
    ...round,
    pulses: {
      ...round.pulses,
    },
    validations: {
      bellResponse,
      seedOrdering,
      seed,
    },
    isOk,
  }
  return out
}

export async function pulsesToRoundData(pulses: Pulse[], resolver: Resolver, params?: any): Promise<RoundData> {
  const byStage = pulses.reduce((acc, pulse) => {
    const stage = pulse.value.content.payload.stage
    if (stage) {
      acc[stage] = pulse
    }
    return acc
  }, {} as Record<string, Pulse>)

  const isOk = !byStage.error
  const isComplete = Boolean(byStage.request && byStage.precommit && (byStage.randomness || byStage.error))
  const { chain } = await resolver.resolve({ chain: pulses[0].value.content.chain })
  if (!chain) {
    throw new Error('No chain found')
  }
  const randomness = isComplete ?
    byteHelper(
      byStage.randomness!.value.content.payload.randomness,
      byStage.randomness!.value.content.payload.timestamp
    ) : null
  const stage = pulses.at(-1)!.value.content.payload.stage
  const error = byStage.error ? new Error(byStage.error.value.content.payload.reason) : null

  const ret: RoundData = {
    round: pulses[0].value.content.payload.round,
    randomness,
    chain,
    pulses: {
      result: byStage.randomness || null,
      request: byStage.request,
      precommit: byStage.precommit || null,
      error: byStage.error || null,
    },
    validations: {
      bellResponse: null,
      seedOrdering: null,
      seed: null,
    },
    isComplete,
    isOk,
    error,
    stage,
  }
  return withValidations(ret, resolver, params)
}

export type DIRNGClientOptions = {
  url?: string,
  chainId?: string,
  validateSeed?: boolean,
  fetchOptions?: FetchOptions
}

export class DIRNGClient {
  private _chainId: string
  private _resolver: Resolver
  private _fetcher: FetcherType
  private _latest?: RoundData | null
  private _randomness?: ByteHelper | null
  private _validateSeed?: boolean

  static create(options?: DIRNGClientOptions) {
    return new DIRNGClient(options)
  }

  constructor(options?: DIRNGClientOptions) {
    const url = options?.url ?? CURBY_API_URL
    this._chainId = options?.chainId ?? CHAINS.curbyq
    this._resolver = new HttpStore(url, options?.fetchOptions)
    this._validateSeed = options?.validateSeed ?? false
    this._fetcher = fetcher({
      base: `${url}/curbyq`,
      ...options?.fetchOptions
    })
  }

  async fetchRoundParams(round: RoundData) {
    const result = round.pulses.result
    if (!result) {
      throw new Error('No result pulse found')
    }
    const paramsHash = result.value.content.payload.paramsHash
    const roundNumber = round.round
    const text : string = await this._fetcher.get(
      `/round/${roundNumber}/params`,
      { autoParse: false }
    )
    const bytes = new TextEncoder().encode(text)
    const digest = await sha3512([bytes], 'HEX')
    if (digest !== paramsHash) {
      throw new Error('Invalid params hash')
    }
    return JSON.parse(text)
  }

  async fetchRoundData(round: RoundData){
    const result = round.pulses.result
    if (!result) {
      throw new Error('No result pulse found')
    }
    const dataHash = result.value.content.payload.dataHash
    const roundNumber = round.round
    const res: Response = await this._fetcher.get(
      `/round/${roundNumber}/data`,
      { autoParse: false }
    )
    const digest = await sha3512(res.body!, 'HEX')
    if (digest !== dataHash) {
      throw new Error('Invalid data hash')
    }
    return res.text()
  }

  async fetchRound(round?: number | 'latest' | 'pending'): Promise<RoundData> {
    const which = round ?? 'latest'
    const path = `/round/${which}`
    const json = await this._fetcher.get(path)
    if (!Array.isArray(json) || json.length === 0) {
      throw new Error('Invalid response from API')
    }
    if (which === 'latest' && this._latest) {
      const latest = this._latest
      if (latest.round === json[0].round) {
        return latest
      }
    }

    const pulses = await Promise.all(json.map(fromJSON)) as Pulse[]
    const roundData = await pulsesToRoundData(pulses, this._resolver)
    let params
    if (this._validateSeed && roundData.isComplete) {
      params = await this.fetchRoundParams(roundData)
    }
    return withValidations(roundData, this._resolver, params)
  }

  async refresh() {
    const roundData = await this.fetchRound()
    this._latest = roundData
    if (roundData.isComplete && roundData.isOk) {
      this._randomness = roundData.randomness
    } else {
      this._randomness = null
    }
  }

  async randomness() {
    await this.refresh()
    return this._randomness!
  }

  async latest() {
    await this.refresh()
    return this._latest!
  }

  async waitForNext({ signal, timeout }: WaitOptions = {}) {
    if (!this._latest) {
      await this.refresh()
      return this._latest!
    }
    const current = this._latest!
    const nextRound = current.round + 1
    const delay = POLL_DELAY
    if (delay > 0) {
      await wait(delay, signal)
    }
    let start = Date.now()
    while (!signal?.aborted) {
      await this.refresh()
      if (this._latest!.round >= nextRound) {
        return this._latest!
      }
      const elapsed = Date.now() - start
      if (timeout && elapsed > timeout) {
        throw new Error('Timeout')
      }
      await wait(1000, signal)
    }
  }

  async *watch(options?: WaitOptions) {
    yield await this.latest()
    while (!options?.signal?.aborted) {
      const res = await this.waitForNext(options)
      if (!res) {
        // aborted
        return
      }
      yield this._latest!
    }
  }
}