import type { Source } from '@buff-beacon-project/twinejs/resolve/http'
import type { Twine } from '@buff-beacon-project/twinejs/twine'
import { HttpResolver } from '@buff-beacon-project/twinejs/resolve/http'
import { getRandomness } from '@buff-beacon-project/twinejs/rand'
import { createRandomness } from './randomness'
import { timeToNext, wait } from './timing'
import CHAINS from './chains.json'
import { PulseContent } from '@buff-beacon-project/twinejs'
const CURBY_API_URL = 'https://api.entwine.me'

export type ClientOptions = {
  url?: string,
  chainId?: string,
}

export type WaitOptions = {
  signal?: AbortSignal,
  timeout?: number,
}

export class Client {
  private _resolver: Source
  private _rngChainId: string

  static create(options?: ClientOptions) {
    return new Client(options)
  }

  constructor(options?: ClientOptions) {
    const url = options?.url ?? CURBY_API_URL
    this._rngChainId = options?.chainId ?? CHAINS.rng
    this._resolver = HttpResolver(url)
  }

  async fetchPulsePair() {
    const chain = await this._resolver.chain(this._rngChainId)
    const latest: Twine<PulseContent> = await chain.latest()
    const prev = await chain.pulse(latest.value.content.links[0])
    return {
      chain,
      latest,
      prev
    }
  }

  async randomness(){
    const { chain, latest, prev } = await this.fetchPulsePair()
    const randomness = await getRandomness(latest, chain, prev)
    return createRandomness(randomness, latest.value.content.payload.timestamp)
  }

  async waitForNext(current?: Twine<PulseContent>, { signal, timeout }: WaitOptions = {}){
    const chain = await this._resolver.chain(this._rngChainId)
    if (!current){
      const pulse = await chain.latest()
      current = pulse
    }
    const nextIndex = current.value.content.index + 1
    const delay = timeToNext(current)
    if (delay > 0){
      await wait(delay, signal)
    }
    let start = Date.now()
    while (!signal?.aborted){
      const res = await this.fetchPulsePair()
      if (res.latest.value.content.index >= nextIndex){
        return res
      }
      const elapsed = Date.now() - start
      if (timeout && elapsed > timeout){
        throw new Error('Timeout')
      }
      await wait(1000, signal)
    }
  }

  async *watch(options?: WaitOptions){
    let current: Twine<PulseContent> | undefined
    yield await this.randomness()
    while (!options?.signal?.aborted){
      const res = await this.waitForNext(current, options)
      if (!res){
        return
      }
      const randomness = await getRandomness(res.latest, res.chain, res.prev)
      yield createRandomness(randomness, res.latest.value.content.payload.timestamp)
      current = res.latest
    }
  }
}