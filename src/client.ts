import type { Source } from '@buff-beacon-project/twinejs/resolve/http'
import type { Twine } from '@buff-beacon-project/twinejs/twine'
import { HttpResolver } from '@buff-beacon-project/twinejs/resolve/http'
import { getRandomness } from '@buff-beacon-project/twinejs/rand'
import { Randomness, createRandomness } from './randomness'
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
  private _latest?: Twine<PulseContent>
  private _prev?: Twine<PulseContent>
  private _randomness?: Randomness

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

  async refresh(){
    const { chain, latest, prev } = await this.fetchPulsePair()
    this._latest = latest
    this._prev = prev
    const randomness = await getRandomness(latest, chain, prev)
    const rand = createRandomness(randomness, latest.value.content.payload.timestamp)
    this._randomness = rand
  }

  async randomness(){
    if (this._randomness && timeToNext(this._randomness) > 0){
      return this._randomness
    }
    await this.refresh()
    return this._randomness!
  }

  async waitForNext({ signal, timeout }: WaitOptions = {}){
    if (!this._latest){
      await this.refresh()
    }
    const current = this._latest!
    const nextIndex = current.value.content.index + 1
    const delay = timeToNext(current)
    if (delay > 0){
      await wait(delay, signal)
    }
    let start = Date.now()
    while (!signal?.aborted){
      await this.refresh()
      if (this._latest!.value.content.index >= nextIndex){
        return this._randomness!
      }
      const elapsed = Date.now() - start
      if (timeout && elapsed > timeout){
        throw new Error('Timeout')
      }
      await wait(1000, signal)
    }
  }

  async *watch(options?: WaitOptions){
    yield await this.randomness()
    while (!options?.signal?.aborted){
      const res = await this.waitForNext(options)
      if (!res){
        return
      }
      yield this._randomness!
    }
  }
}