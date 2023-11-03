import { Pulse, Chain, Resolver, ChainResolver } from '@twine-protocol/twine-core'
import { HttpStore } from '@twine-protocol/twine-http-store'
import { getRandomness } from './extract-randomness'
import { Randomness, createRandomness } from './randomness'
import { timeToNext, wait } from './timing'
import CHAINS from './chains'
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
  private _resolver: Resolver
  private _rngChainId: string
  private _latest?: Pulse | null
  private _prev?: Pulse | null
  private _randomness?: Randomness | null

  static create(options?: ClientOptions) {
    return new Client(options)
  }

  constructor(options?: ClientOptions) {
    const url = options?.url ?? CURBY_API_URL
    this._rngChainId = options?.chainId ?? CHAINS.rng
    this._resolver = new HttpStore(url)
  }

  async fetchPulsePair() {
    const { chain } = await this._resolver.resolve({ chain: this._rngChainId })
    if (!chain){
      throw new Error('No chain found')
    }
    const res = await ChainResolver.create(this._resolver, chain)
    const latest = await res.latest()
    let prev
    if (latest){
      prev = await res.pulse(latest.value.content.links[0])
    }
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
    if (latest && prev){
      const randomness = await getRandomness(latest, chain, prev)
      const rand = createRandomness(randomness, latest.value.content.payload.timestamp)
      this._randomness = rand
    } else {
      this._randomness = null
    }
  }

  async randomness(){
    if (this._randomness && timeToNext(this._randomness) > 0){
      return this._randomness
    }
    await this.refresh()
    if (!this._randomness){
      throw new Error('No randomness available')
    }
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