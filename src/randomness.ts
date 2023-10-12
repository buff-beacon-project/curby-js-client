import type { BitStream } from 'bit-buffer'
// @ts-ignore
import { BitReader, iterBitStream } from '@buff-beacon-project/rand-utils'

export type Randomness = {
  timestamp: number,
  bytes(): Uint8Array,
  bits(n: number): Generator<number>,
  signedBits(n: number): Generator<number>,
  reader(): BitStream,
  maxShuffleLength: number,
  shuffled(arr: any[]): any[],
  applyShuffle(arr: any[]): void,
  unfold(cb: (reader: BitStream, index: number) => any): Generator<any>,
}

export function createRandomness(bytes: Uint8Array, isoTimestamp: string): Randomness {
  const timestamp = Date.parse(isoTimestamp)
  const br = BitReader.from(bytes)

  const unfold = (cb: (reader: BitStream, index: number) => any) => {
    const stream = br.stream()
    return iterBitStream((i: number) => cb(stream, i))
  }

  return {
    timestamp,
    bytes: () => bytes.slice(),
    bits(n: number) {
      return unfold((reader) => reader.readBits(n, false))
    },
    signedBits(n: number) {
      return unfold((reader) => reader.readBits(n, true))
    },
    reader: () => br.clone(),
    maxShuffleLength: br.maxShuffleLength,
    shuffled(arr: any[]) {
      return br.shuffled(arr)
    },
    applyShuffle(arr: any[]) {
      br.applyShuffle(arr)
    },
    unfold
  }
}