/**
 * @packageDocumentation
 * This is the official client library for the
 * [CURBy Project](https://random.colorado.edu).
 * It fetches and validates both the regular randomness
 * chain and the DIRNG chain.
 *
 * @example
 * ```js
 * import { Client, DIRNGClient } from '@buff-beacon-project/curby-client'
 *
 * const client = Client.create()
 * const randomness = await client.randomness()
 * const myArray = [1, 2, 3, 4, 5]
 * const shuffled = randomness.shuffled(myArray)
 * // shuffled = [3, 4, 2, 5, 1]
 *
 * const dirng = DIRNGClient.create()
 * const latest = await dirng.latest()
 * console.log(`Got info for round ${latest.round}. Stage is ${latest.stage}`)
 * ```
 */

import CHAINS from './chains'
export { CHAINS }
export * from './common'
export * from './client'
export * from './dirng'
export * from './byte-helper'
export * from './extract-randomness'
export * from './timing'