import { Pulse, Chain, Resolver, ChainResolver, PulseIndex, IntoCid } from '@twine-protocol/twine-core'
import { HttpStore } from '@twine-protocol/twine-http-store'
import type { FetchOptions } from 'itty-fetcher'
import { extractRandomness } from './extract-randomness'
import { ByteHelper, byteHelper } from './byte-helper'
import { timeToNext, wait } from './timing'
import CHAINS from './chains'
import { CURBY_API_URL } from './common'
import { WaitOptions } from './common'

/**
 * The options for the Rng Client
 *
 * @group PRNG
 */
export type ClientOptions = {
  /**
   * Alternate URL for the CURBy API
   */
  url?: string,
  /**
   * Alternate chain cid for the RNG chain
   */
  chainId?: string,
  /**
   * Underlying fetch options
   *
   * @see {@link https://github.com/kwhitley/itty-fetcher}
   */
  fetchOptions?: FetchOptions
}

/**
 * A randomness round
 *
 * @group PRNG
 */
export type RandomnessRound = {
  /**
   * The chain
   */
  chain: Chain,
  /**
   * The pulse
   */
  pulse: Pulse,
  /**
   * The previous pulse
   */
  prev?: Pulse | null,
  /**
   * The randomness
   */
  randomness?: ByteHelper | null
}

/**
 * A pair of sequential pulses
 *
 * @group PRNG
 */
export type PulsePair = {
  /** The chain */
  chain: Chain,
  /** The pulse */
  pulse?: Pulse | null,
  /** The previous pulse */
  prev?: Pulse | null
}

/**
 * A latest pulse pair
 *
 * @group PRNG
 */
export type LatestPulsePair = {
  /** The latest pulse */
  latest?: Pulse | null,
  /** The previous pulse */
  prev?: Pulse | null
}

/**
 * A client for fetching randomness from the CURBy RNG chain
 *
 * @group PRNG
 * @example
 * ```ts
 * import { Client } from '@buff-beacon-project/curby-client'
 *
 * const client = Client.create()
 * const randomness = await client.randomness()
 * console.log(randomness)
 * ```
 */
export class Client {
  private _resolver: Resolver
  private _rngChainId: string
  private _latest?: RandomnessRound

  /**
   * Create a new client
   * @param options - The options for the client
   */
  static create(options?: ClientOptions) {
    return new Client(options)
  }

  /**
   * @param options - The options for the client
   */
  constructor(options?: ClientOptions) {
    const url = options?.url ?? CURBY_API_URL
    this._rngChainId = options?.chainId ?? CHAINS.rng
    this._resolver = new HttpStore(url, options?.fetchOptions)
  }

  /**
   * Fetch the a pulse and its predecessor by index or CID
   */
  async fetchPulsePair(indexOrCid?: PulseIndex | IntoCid): Promise<PulsePair> {
    const { chain } = await this._resolver.resolve({ chain: this._rngChainId })
    if (!chain){
      throw new Error('No chain found')
    }
    const res = await ChainResolver.create(this._resolver, chain)
    const pulse = typeof indexOrCid === 'number' ?
      await res.pulse(indexOrCid) :
      await res.latest()
    let prev
    if (pulse && pulse.value.content.links.length > 0){
      prev = await res.pulse(pulse.value.content.links[0])
    }
    return {
      chain,
      pulse,
      prev
    }
  }

  /**
   * Refresh the internal state of the client
   */
  async refresh() {
    if (timeToNext(this._latest?.pulse) > 0) {
      return
    }
    const { chain, pulse: latest, prev } = await this.fetchPulsePair()
    if (!latest){
      this._latest = undefined
      throw new Error('Could not fetch latest pulse')
    }
    this._latest = { chain, pulse: latest, prev }
    if (!prev){
      return this._latest
    }
    const randomness = await extractRandomness(latest, chain, prev)
    const rand = byteHelper(randomness, latest.value.content.payload.timestamp)
    this._latest = { chain, pulse: latest, prev, randomness: rand }
    return this._latest
  }

  /**
   * Get the latest randomness
   */
  async randomness(){
    await this.refresh()
    return this._latest?.randomness
  }

  /**
   * Get the latest round data
   */
  async latest(){
    await this.refresh()
    return this._latest
  }

  /**
   * Get the previous pulse
   */
  async prev(){
    await this.refresh()
    return this._latest?.prev
  }

  /**
   * Get the latest and previous pulse
   */
  async pair(): Promise<LatestPulsePair> {
    await this.refresh()
    return {
      latest: this._latest?.pulse,
      prev: this._latest?.prev,
    }
  }

  /**
   * Wait for the next pulse
   */
  async waitForNext({ signal, timeout }: WaitOptions = {}){
    if (!this._latest){
      await this.refresh()
      return this._latest!
    }
    const current = this._latest.pulse
    const nextIndex = current.value.content.index + 1
    const delay = timeToNext(current)
    if (delay > 0){
      await wait(delay, signal)
    }
    let start = Date.now()
    while (!signal?.aborted){
      await this.refresh()
      if (this._latest.pulse.value.content.index >= nextIndex){
        return this._latest!
      }
      const elapsed = Date.now() - start
      if (timeout && elapsed > timeout){
        throw new Error('Timeout')
      }
      await wait(1000, signal)
    }
  }

  /**
   * Poll for the latest randomness
   * @param options - The options for waiting
   *
   * @example
   * ```ts
   * const client = Client.create()
   * for await (const round of client.watch()){
   *   console.log(round.randomness)
   * }
   * ```
   */
  async *watch(options?: WaitOptions){
    yield await this.latest()
    while (!options?.signal?.aborted){
      const res = await this.waitForNext(options)
      if (!res){
        // aborted
        return
      }
      yield this._latest!
    }
  }
}