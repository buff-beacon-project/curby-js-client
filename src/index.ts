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
 *
 * ## Using random bits
 *
 * The randomness returned by this library is a {@link ByteHelper} object.
 * It provides many utility functions for working with random bits such as
 * {@link ByteHelper.shuffled} to shuffle lists.
 *
 * There is also an acompaning library, [rand-utils](https://curby.gitbook.io/rand-utils)
 * that provides more utilities for working with random bits. It is particularly
 * useful for getting unbiased random integers from a bitstream.
 *
 * When using public randomness for the purpose of transparency, such as
 * in a lottery, it is important to first publically commit to using a future
 * round number. This prevents the operator from retroactively choosing a round
 * that benefits them. Additionally, the operator should commit to the specific
 * algorithm that is using the randomness.
 *
 * A simple example of this would be to use a git commit hash of code to serve
 * as the algorithm. The code should explicitly state the chainCid, round number,
 * and be fully deterministic given the initial seed. There should also be a clear
 * explanation of what to do in the event of an error.
 *
 * ## How to use this library
 *
 * The CURBy client library provides two main classes, {@link Client}
 * (for classical randomness) and {@link DIRNGClient} (for Quantum DIRNG randomness).
 *
 * ### Classical Randomness
 *
 * The {@link Client} class is used to fetch randomness from the main classical CURBy chain
 * which produces randomness every minute. The latest randomness can be fetched by simply
 * calling the {@link Client.randomness} method. The client library checks the following
 * when fetching randomness:
 *
 * - The chain has a valid signature
 * - The pulse and previous pulse have valid signatures
 * - The pulse index matches the expected index (round)
 * - The randomness has a valid precommitment value
 *
 * For more information on the randomness generation process, see the
 * [CURBy-RNG Chain reference](https://random.colorado.edu/concepts/curby-network#curby-rng-(nist-beacon-inspired)-chain).
 *
 * ### Quantum DIRNG Randomness
 *
 * The {@link DIRNGClient} class is used to fetch randomness from the Quantum DIRNG chain,
 * CURBY-Q. The latest randomness can be fetched by calling the {@link DIRNGClient.randomness} method
 * and to get randomness from a specific round, you can instead call {@link DIRNGClient.fetchRound} and
 * use the `.randomness` property of the returned object, which is a {@link ByteHelper} object.
 *
 * The client library checks the following when fetching randomness:
 *
 * - The chain has a valid signature
 * - All pulses have valid signatures
 * - The response pulse from the bell data chain has correct causal ordering with the CURBY-Q pulses.
 * - The seed pulse on the seed chain has correct causal ordering with the CURBY-Q pulses.
 * - The seed was correctly expanded to the correct number of bits. (NOTE: this requires the setting `validateSeed` to be true)
 *
 * What is not validated, due to technical limitations:
 *
 * - The DIRNG certificate, and randomness extraction.
 *
 * In order to validate the randomness, a separate utility is required.
 * See [curby_verify docker image)[https://github.com/buff-beacon-project/curby_verify] for more information.
 *
 * @see {@link https://github.com/buff-beacon-project/curby_verify}
 */

import CHAINS from './chains'
export { CHAINS }
export * from './common'
export * from './client'
export * from './dirng'
export * from './byte-helper'
export * from './extract-randomness'
export * from './timing'