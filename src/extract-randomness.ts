// @ts-ignore
import { sha3512 } from '@multiformats/sha3'
import * as digest from 'multiformats/hashes/digest'
import { decodeProtectedHeader } from 'jose'
import { Chain, Pulse } from '@twine-protocol/twine-core'

export class InvalidPrecom extends Error {
  constructor (msg = 'Invalid Precommitment Value', options: any = {}) {
    super(msg)
    this.name = 'InvalidPrecom'
    this.cause = options?.cause
  }
}

const DETERMINISTIC_ALGORITHMS = [
  'RS256', 'RS384', 'RS512'
]

export type NumberArray = number[] | Uint8Array | Uint16Array | Uint32Array | Float32Array

/**
 * zip the provided arrays together
 */
export function zip(...arrays: NumberArray[]): number[][] {
  const minLen = Math.min(...arrays.map(arr => arr.length))
  const [firstArr, ...restArrs] = arrays
  return Array.from(firstArr.slice(0, minLen)).map(
    (val, i) => [val, ...restArrs.map(arr => arr[i])]
  )
}

/**
 * Perform an XOR operation on two arrays
 */
export function xorArrays(a: NumberArray, b: NumberArray) {
  const out = zip(a, b).map(([x, y]) => x ^ y)
  // @ts-ignore
  if (a.constructor?.from) {
    // @ts-ignore
    return a.constructor.from(out)
  }
  return out
}

/**
 * @param {string} signature
 * @returns {boolean}
 */
export const usesDeterministicAlgorithm = (signature: string) => {
  const header = decodeProtectedHeader(signature)
  return !!header.alg && DETERMINISTIC_ALGORITHMS.indexOf(header.alg) > -1
}

export const getPrecommitmentValue = async (salt: Uint8Array, previous: Pulse, hasher = sha3512) => {
  const x = xorArrays(salt, previous.cid.multihash.digest)
  return hasher.digest(x)
}

export const checkValidPrecommitmentValue = async (pulse: Pulse, previous: Pulse, hasher = sha3512) => {
  try {
    const salt = pulse.value.content.payload.salt
    const pre = digest.decode(previous.value.content.payload.pre)
    const value = await getPrecommitmentValue(salt, previous, hasher)
    const valid = digest.equals(value, pre)
    if (!valid) {
      throw new InvalidPrecom()
    }
  } catch (cause) {
    throw new InvalidPrecom(undefined, { cause })
  }
  return true
}

export const getRandomness = async (pulse: Pulse, chain: Chain, previous: Pulse) => {
  if (!usesDeterministicAlgorithm(pulse.value.signature)) {
    throw new Error('Pulse is signed with a non-deterministic algorithm')
  }
  await chain.verifySignature()
  await pulse.verifySignature(chain)
  await checkValidPrecommitmentValue(pulse, previous)
  return Uint8Array.from(pulse.cid.multihash.digest)
}
