import { Pulse, Chain, Resolver, ChainResolver, PulseIndex, IntoCid } from '@twine-protocol/twine-core'
import { HttpStore } from '@twine-protocol/twine-http-store'
import type { FetchOptions } from 'itty-fetcher'
import { extractRandomness } from './extract-randomness'
import { ByteHelper, byteHelper } from './byte-helper'
import { timeToNext, wait } from './timing'
import CHAINS from './chains'
const CURBY_API_URL = 'https://api.entwine.me'

export type ClientOptions = {
  url?: string,
  chainId?: string,
  fetchOptions?: FetchOptions
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
  private _randomness?: ByteHelper | null

  static create(options?: ClientOptions) {
    return new Client(options)
  }

  constructor(options?: ClientOptions) {
    const url = options?.url ?? CURBY_API_URL
    this._rngChainId = options?.chainId ?? CHAINS.rng
    this._resolver = new HttpStore(url, options?.fetchOptions)
  }

  async fetchPulsePair(indexOrCid?: PulseIndex | IntoCid) {
    const { chain } = await this._resolver.resolve({ chain: this._rngChainId })
    if (!chain){
      throw new Error('No chain found')
    }
    const res = await ChainResolver.create(this._resolver, chain)
    const pulse = typeof indexOrCid === 'number' ?
      await res.pulse(indexOrCid) :
      await res.latest()
    let prev
    if (pulse){
      prev = await res.pulse(pulse.value.content.links[0])
    }
    return {
      chain,
      pulse,
      prev
    }
  }

  async refresh() {
    if (timeToNext(this._latest) > 0) {
      return
    }
    const { chain, pulse: latest, prev } = await this.fetchPulsePair()
    this._latest = latest
    this._prev = prev
    if (latest && prev){
      const randomness = await extractRandomness(latest, chain, prev)
      const rand = byteHelper(randomness, latest.value.content.payload.timestamp)
      this._randomness = rand
    } else {
      this._randomness = null
      throw new Error('Could not fetch latest pulses')
    }
  }

  async randomness(){
    await this.refresh()
    return this._randomness!
  }

  async latest(){
    await this.refresh()
    return this._latest!
  }

  async prev(){
    await this.refresh()
    return this._prev!
  }

  async pair(){
    await this.refresh()
    return {
      latest: this._latest!,
      prev: this._prev!,
    }
  }

  async waitForNext({ signal, timeout }: WaitOptions = {}){
    if (!this._latest){
      await this.refresh()
      return this._randomness!
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
        // aborted
        return
      }
      yield this._randomness!
    }
  }
}