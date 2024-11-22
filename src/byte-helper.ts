import { BitStream } from 'bit-buffer'
// @ts-ignore
import { BitReader, unfoldBitstream } from '@buff-beacon-project/rand-utils'

/**
 * A helper for working with randomness.
 *
 * Contains methods for reading bits, shuffling arrays, and more.
 *
 * @group Utilities
 * @example
 * ```ts
 * // BytesHelper from a randomness call
 * const randomness = await client.randomness()
 *
 * // Get a list of unsigned numbers formed by reading 10 bits at a time
 * const bits = Array.from(randomness.bits(10))
 *
 * // Get a shuffled version of an array
 * const array = [1, 2, 3, 4, 5]
 * const shuffled = randomness.shuffled(array)
 * // shuffled = [3, 1, 5, 2, 4]
 * ```
 */
export interface ByteHelper {
  /**
   * The unix timestamp of the randomness
   */
  timestamp: number,
  /**
   * The bytes of the randomness
   */
  bytes(): Uint8Array,
  /**
   * A generator for reading unsigned numbers
   * @param n The number of bits to read at a time
   *
   * @example
   * ```ts
   * for (const n of randomness.bits(10)){
   *   console.log(n)
   * }
   * // or create an array
   * const numbers = Array.from(randomness.bits(10))
   * ```
   */
  bits(n: number): Generator<number>,
  /**
   * A generator for reading signed numbers
   *
   * @param n The number of bits to read at a time
   *
   * See {@link ByteHelper.bits} for an example
   */
  signedBits(n: number): Generator<number>,
  /**
   * The BitStream for the randomness
   */
  stream(): BitStream,
  /**
   * The a BitReader for the randomness
   *
   * @see {@link https://github.com/buff-beacon-project/rand-utils}
   */
  reader(): BitReader,
  /**
   * The maximum length an array can be for shuffling
   */
  maxShuffleLength: number,
  /**
   * Shuffles an array using the randomness
   *
   * @param arr The array to shuffle
   *
   * @example
   * ```ts
   * const array = [1, 2, 3, 4, 5]
   * const shuffled = randomness.shuffled(array)
   * // shuffled = [3, 1, 5, 2, 4]
   * ```
   */
  shuffled(arr: any[]): any[],
  /**
   * Applies a shuffle to an array
   *
   * @param arr The array to shuffle
   *
   * @example
   * ```ts
   * const array = [1, 2, 3, 4, 5]
   * randomness.applyShuffle(array)
   * // array = [3, 1, 5, 2, 4]
   * ```
   */
  applyShuffle(arr: any[]): void,
  /**
   * Unfolds the randomness
   *
   * @param cb A function to call for each iteration
   *
   * @example
   * ```ts
   * // A random walk
   * const cardinal = ['north', 'east', 'south', 'west']
   * const path = randomness.unfold((reader) => {
   *   const n = reader.readBits(2, false)
   *   return cardinal[n]
   * })
   * for (const step of path){
   *   console.log(step)
   * }
   * ```
   */
  unfold(cb: (reader: BitStream, index: number) => any): Generator<any>,
}

/**
 * Create a {@link ByteHelper} from a set of bytes and a timestamp
 *
 * @group Utilities
 */
export function byteHelper(bytes: Uint8Array, isoTimestamp: string): ByteHelper {
  const timestamp = Date.parse(isoTimestamp)
  const br = BitReader.from(bytes)

  const unfold = (cb: (reader: BitStream, index: number) => any) => {
    const stream = br.stream()
    return unfoldBitstream(stream, cb)
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
    stream(){
      return br.stream()
    },
    reader: () => BitReader.from(bytes),
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