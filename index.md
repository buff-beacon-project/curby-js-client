**@buff-beacon-project/curby-client** • **Docs**

***

# @buff-beacon-project/curby-client

This is the official client library for the
[CURBy Project](https://random.colorado.edu).
It fetches and validates both the regular randomness
chain and the DIRNG chain.

## Example

```js
import { Client, DIRNGClient } from '@buff-beacon-project/curby-client'

const client = Client.create()
const randomness = await client.randomness()
const myArray = [1, 2, 3, 4, 5]
const shuffled = randomness.shuffled(myArray)
// shuffled = [3, 4, 2, 5, 1]

const dirng = DIRNGClient.create()
const latest = await dirng.latest()
console.log(`Got info for round ${latest.round}. Stage is ${latest.stage}`)
```

## Using random bits

The randomness returned by this library is a [ByteHelper](interfaces/ByteHelper.md) object.
It provides many utility functions for working with random bits such as
[ByteHelper.shuffled](interfaces/ByteHelper.md#shuffled) to shuffle lists.

There is also an acompaning library, [rand-utils](https://curby.gitbook.io/rand-utils)
that provides more utilities for working with random bits. It is particularly
useful for getting unbiased random integers from a bitstream.

When using public randomness for the purpose of transparency, such as
in a lottery, it is important to first publically commit to using a future
round number. This prevents the operator from retroactively choosing a round
that benefits them. Additionally, the operator should commit to the specific
algorithm that is using the randomness.

A simple example of this would be to use a git commit hash of code to serve
as the algorithm. The code should explicitly state the chainCid, round number,
and be fully deterministic given the initial seed. There should also be a clear
explanation of what to do in the event of an error.

## How to use this library

The CURBy client library provides two main classes, [Client](classes/Client.md)
(for classical randomness) and [DIRNGClient](classes/DIRNGClient.md) (for Quantum DIRNG randomness).

### Classical Randomness

The [Client](classes/Client.md) class is used to fetch randomness from the main classical CURBy chain
which produces randomness every minute. The latest randomness can be fetched by simply
calling the [Client.randomness](classes/Client.md#randomness) method. The client library checks the following
when fetching randomness:

- The chain has a valid signature
- The pulse and previous pulse have valid signatures
- The pulse index matches the expected index (round)
- The randomness has a valid precommitment value

For more information on the randomness generation process, see the
[CURBy-RNG Chain reference](https://random.colorado.edu/concepts/curby-network#curby-rng-(nist-beacon-inspired)-chain).

### Quantum DIRNG Randomness

The [DIRNGClient](classes/DIRNGClient.md) class is used to fetch randomness from the Quantum DIRNG chain,
CURBY-Q. The latest randomness can be fetched by calling the [DIRNGClient.randomness](classes/DIRNGClient.md#randomness) method
and to get randomness from a specific round, you can instead call [DIRNGClient.fetchRound](classes/DIRNGClient.md#fetchround) and
use the `.randomness` property of the returned object, which is a [ByteHelper](interfaces/ByteHelper.md) object.

The client library checks the following when fetching randomness:

- The chain has a valid signature
- All pulses have valid signatures
- The response pulse from the bell data chain has correct causal ordering with the CURBY-Q pulses.
- The seed pulse on the seed chain has correct causal ordering with the CURBY-Q pulses.
- The seed was correctly expanded to the correct number of bits. (NOTE: this requires the setting `validateSeed` to be true)

What is not validated, due to technical limitations:

- The DIRNG certificate, and randomness extraction.

In order to validate the randomness, a separate utility is required.
See [curby_verify docker image)[https://github.com/buff-beacon-project/curby_verify] for more information.

## See

[https://github.com/buff-beacon-project/curby_verify](https://github.com/buff-beacon-project/curby_verify)

## Type Aliases

| Type alias | Description |
| ------ | ------ |
| [NumberArray](type-aliases/NumberArray.md) | A type for arrays of numbers |
| [WaitOptions](type-aliases/WaitOptions.md) | The options for waiting |

## Classical RNG

| Class, Type alias | Description |
| ------ | ------ |
| [Client](classes/Client.md) | A client for fetching randomness from the CURBy RNG chain |
| [ClientOptions](type-aliases/ClientOptions.md) | The options for the Rng Client |
| [LatestPulsePair](type-aliases/LatestPulsePair.md) | A latest pulse pair |
| [PulsePair](type-aliases/PulsePair.md) | A pair of sequential pulses |
| [RandomnessRound](type-aliases/RandomnessRound.md) | A randomness round |

## Constants

| Variable | Description |
| ------ | ------ |
| [CHAINS](variables/CHAINS.md) | A constant containing the chain CIDs |
| [CURBY\_API\_URL](variables/CURBY_API_URL.md) | The base URL for the CURBy API |

## DIRNG

| Class, Type alias, Function | Description |
| ------ | ------ |
| [DIRNGClient](classes/DIRNGClient.md) | A client for the Device Independent Randomness Generation (DIRNG) chain |
| [DIRNGClientOptions](type-aliases/DIRNGClientOptions.md) | The options for the DIRNG client |
| [RoundData](type-aliases/RoundData.md) | A DIRNG round's data |
| [RoundValidations](type-aliases/RoundValidations.md) | A round's validations |
| [pulsesToRoundData](functions/pulsesToRoundData.md) | Convert pulses to round data |
| [withValidations](functions/withValidations.md) | Add validations to a round |

## Errors

| Class | Description |
| ------ | ------ |
| [InvalidPrecom](classes/InvalidPrecom.md) | An error for when a precommitment value is invalid |

## Utilities

| Interface, Function | Description |
| ------ | ------ |
| [ByteHelper](interfaces/ByteHelper.md) | A helper for working with randomness. |
| [byteHelper](functions/byteHelper.md) | Create a [ByteHelper](interfaces/ByteHelper.md) from a set of bytes and a timestamp |
| [extractRandomness](functions/extractRandomness.md) | Extract randomness from a pulse on an RNG chain |
| [getPrecommitmentValue](functions/getPrecommitmentValue.md) | Get the precommitment value for a pulse |
| [timeToNext](functions/timeToNext.md) | Time until next rng pulse in milliseconds |
| [wait](functions/wait.md) | Wait a specified number of milliseconds |
| [xorArrays](functions/xorArrays.md) | Perform an XOR operation on two arrays |
| [zip](functions/zip.md) | zip the provided arrays together |

## Validations

| Type alias, Function | Description |
| ------ | ------ |
| [Validation](type-aliases/Validation.md) | A validation result |
| [checkValidPrecommitmentValue](functions/checkValidPrecommitmentValue.md) | Check if a precommitment value is valid |
| [usesDeterministicAlgorithm](functions/usesDeterministicAlgorithm.md) | - |
| [validateBellResponse](functions/validateBellResponse.md) | Validate a bell response pulse |
| [validateSeed](functions/validateSeed.md) | Validate the seed value |
| [validateSeedOrdering](functions/validateSeedOrdering.md) | Validate the ordering of the seed pulse |
