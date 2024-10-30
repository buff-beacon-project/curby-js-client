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

## Type Aliases

- [NumberArray](type-aliases/NumberArray.md)
- [WaitOptions](type-aliases/WaitOptions.md)

## Constants

- [CHAINS](variables/CHAINS.md)
- [CURBY\_API\_URL](variables/CURBY_API_URL.md)

## DIRNG

- [DIRNGClient](classes/DIRNGClient.md)
- [DIRNGClientOptions](type-aliases/DIRNGClientOptions.md)
- [RoundData](type-aliases/RoundData.md)
- [RoundValidations](type-aliases/RoundValidations.md)
- [pulsesToRoundData](functions/pulsesToRoundData.md)
- [withValidations](functions/withValidations.md)

## Errors

- [InvalidPrecom](classes/InvalidPrecom.md)

## PRNG

- [Client](classes/Client.md)
- [ClientOptions](type-aliases/ClientOptions.md)
- [LatestPulsePair](type-aliases/LatestPulsePair.md)
- [PulsePair](type-aliases/PulsePair.md)
- [RandomnessRound](type-aliases/RandomnessRound.md)

## Utilities

- [ByteHelper](type-aliases/ByteHelper.md)
- [byteHelper](functions/byteHelper.md)
- [extractRandomness](functions/extractRandomness.md)
- [getPrecommitmentValue](functions/getPrecommitmentValue.md)
- [timeToNext](functions/timeToNext.md)
- [wait](functions/wait.md)
- [xorArrays](functions/xorArrays.md)
- [zip](functions/zip.md)

## Validations

- [Validation](type-aliases/Validation.md)
- [checkValidPrecommitmentValue](functions/checkValidPrecommitmentValue.md)
- [usesDeterministicAlgorithm](functions/usesDeterministicAlgorithm.md)
- [validateBellResponse](functions/validateBellResponse.md)
- [validateSeed](functions/validateSeed.md)
- [validateSeedOrdering](functions/validateSeedOrdering.md)
