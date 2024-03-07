[@buff-beacon-project/curby-client](README.md) / Exports

# @buff-beacon-project/curby-client

## Table of contents

### Type Aliases

- [NumberArray](modules.md#numberarray)
- [WaitOptions](modules.md#waitoptions)

### Constants

- [CHAINS](modules.md#chains)
- [CURBY\_API\_URL](modules.md#curby_api_url)

### DIRNG

- [DIRNGClient](classes/DIRNGClient.md)
- [DIRNGClientOptions](modules.md#dirngclientoptions)
- [RoundData](modules.md#rounddata)
- [RoundValidations](modules.md#roundvalidations)
- [pulsesToRoundData](modules.md#pulsestorounddata)
- [withValidations](modules.md#withvalidations)

### Errors

- [InvalidPrecom](classes/InvalidPrecom.md)

### PRNG

- [Client](classes/Client.md)
- [ClientOptions](modules.md#clientoptions)
- [LatestPulsePair](modules.md#latestpulsepair)
- [PulsePair](modules.md#pulsepair)
- [RandomnessRound](modules.md#randomnessround)

### Utilities

- [ByteHelper](modules.md#bytehelper)
- [byteHelper](modules.md#bytehelper-1)
- [extractRandomness](modules.md#extractrandomness)
- [getPrecommitmentValue](modules.md#getprecommitmentvalue)
- [timeToNext](modules.md#timetonext)
- [wait](modules.md#wait)
- [xorArrays](modules.md#xorarrays)
- [zip](modules.md#zip)

### Validations

- [Validation](modules.md#validation)
- [checkValidPrecommitmentValue](modules.md#checkvalidprecommitmentvalue)
- [usesDeterministicAlgorithm](modules.md#usesdeterministicalgorithm)
- [validateBellResponse](modules.md#validatebellresponse)
- [validateSeed](modules.md#validateseed)
- [validateSeedOrdering](modules.md#validateseedordering)

## Type Aliases

### NumberArray

Ƭ **NumberArray**: `number`[] \| `Uint8Array` \| `Uint16Array` \| `Uint32Array` \| `Float32Array`

A type for arrays of numbers

#### Defined in

[src/extract-randomness.ts:27](https://github.com/buff-beacon-project/curby-js-client/blob/6a4bdf0/src/extract-randomness.ts#L27)

___

### WaitOptions

Ƭ **WaitOptions**: `Object`

The options for waiting

**`See`**

[Client.waitForNext](classes/Client.md#waitfornext)

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `signal?` | `AbortSignal` | An optional abort signal |
| `timeout?` | `number` | The maximum time to wait |

#### Defined in

[src/common.ts:11](https://github.com/buff-beacon-project/curby-js-client/blob/6a4bdf0/src/common.ts#L11)

## Constants

### CHAINS

• **CHAINS**: `Object`

A constant containing the chain CIDs

**`Constant`**

CHAINS

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `bell` | `string` | CID of the BELL chain |
| `curbyq` | `string` | CID of the CURBy-Q chain |
| `rng` | `string` | CID of the RNG chain |

#### Defined in

[src/chains.js:7](https://github.com/buff-beacon-project/curby-js-client/blob/6a4bdf0/src/chains.js#L7)

___

### CURBY\_API\_URL

• `Const` **CURBY\_API\_URL**: ``"https://api.entwine.me"``

The base URL for the CURBy API

#### Defined in

[src/common.ts:5](https://github.com/buff-beacon-project/curby-js-client/blob/6a4bdf0/src/common.ts#L5)

## DIRNG

• **DIRNGClient**: `Object`

A client for the Device Independent Randomness Generation (DIRNG) chain

**`Example`**

```ts
import { DIRNGClient } from '@buff-beacon-project/curby-client'

const client = DIRNGClient.create()
const randomness = await client.randomness()
console.log(randomness)
```

#### Defined in

[src/dirng.ts:361](https://github.com/buff-beacon-project/curby-js-client/blob/6a4bdf0/src/dirng.ts#L361)

### DIRNGClientOptions

Ƭ **DIRNGClientOptions**: `Object`

The options for the DIRNG client

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `fetchOptions?` | `FetchOptions` | The underlying fetch options **`See`** [https://github.com/kwhitley/itty-fetcher](https://github.com/kwhitley/itty-fetcher) |
| `url?` | `string` | Alternate URL for the CURBy API |
| `validateSeed?` | `boolean` | Whether to validate the seed value (default: false). Requires fetching the parameters for each round |

#### Defined in

[src/dirng.ts:331](https://github.com/buff-beacon-project/curby-js-client/blob/6a4bdf0/src/dirng.ts#L331)

___

### RoundData

Ƭ **RoundData**: `Object`

A DIRNG round's data

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `chain` | `Chain` | The chain |
| `error` | `Error` \| ``null`` | Error for the round (if present) |
| `isComplete` | `boolean` | Whether the round is complete |
| `isOk` | `boolean` | Whether the round succeeded and is valid based on the validations present |
| `pulses` | \{ `error`: `Pulse` \| ``null`` ; `precommit`: `Pulse` \| ``null`` ; `request`: `Pulse` ; `result`: `Pulse` \| ``null``  } | The pulses for the round |
| `pulses.error` | `Pulse` \| ``null`` | The error pulse |
| `pulses.precommit` | `Pulse` \| ``null`` | The precommit pulse |
| `pulses.request` | `Pulse` | The request pulse |
| `pulses.result` | `Pulse` \| ``null`` | The result (randomness) pulse |
| `randomness` | [`ByteHelper`](modules.md#bytehelper) \| ``null`` | The randomness for the round |
| `round` | `number` | The round number |
| `stage` | `string` | The stage of the round |
| `validations` | [`RoundValidations`](modules.md#roundvalidations) | The validations for the round (if present) |

#### Defined in

[src/dirng.ts:57](https://github.com/buff-beacon-project/curby-js-client/blob/6a4bdf0/src/dirng.ts#L57)

___

### RoundValidations

Ƭ **RoundValidations**: `Object`

A round's validations

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `bellResponse` | [`Validation`](modules.md#validation) \| ``null`` | The validation of the presence of a response pulse on the bell chain |
| `seed` | [`Validation`](modules.md#validation) \| ``null`` | The validation of the seed value |
| `seedOrdering` | [`Validation`](modules.md#validation) \| ``null`` | The validation of the ordering of the seed pulse |

#### Defined in

[src/dirng.ts:37](https://github.com/buff-beacon-project/curby-js-client/blob/6a4bdf0/src/dirng.ts#L37)

___

### pulsesToRoundData

▸ **pulsesToRoundData**(`pulses`, `resolver`, `params?`): `Promise`\<[`RoundData`](modules.md#rounddata)\>

Convert pulses to round data

#### Parameters

| Name | Type |
| :------ | :------ |
| `pulses` | `Pulse`[] |
| `resolver` | `Resolver` |
| `params?` | `any` |

#### Returns

`Promise`\<[`RoundData`](modules.md#rounddata)\>

#### Defined in

[src/dirng.ts:280](https://github.com/buff-beacon-project/curby-js-client/blob/6a4bdf0/src/dirng.ts#L280)

___

### withValidations

▸ **withValidations**(`round`, `resolver`, `params?`): `Promise`\<[`RoundData`](modules.md#rounddata)\>

Add validations to a round

#### Parameters

| Name | Type |
| :------ | :------ |
| `round` | [`RoundData`](modules.md#rounddata) |
| `resolver` | `Resolver` |
| `params?` | `any` |

#### Returns

`Promise`\<[`RoundData`](modules.md#rounddata)\>

#### Defined in

[src/dirng.ts:255](https://github.com/buff-beacon-project/curby-js-client/blob/6a4bdf0/src/dirng.ts#L255)

## PRNG

• **Client**: `Object`

A client for fetching randomness from the CURBy RNG chain

**`Example`**

```ts
import { Client } from '@buff-beacon-project/curby-client'

const client = Client.create()
const randomness = await client.randomness()
console.log(randomness)
```

#### Defined in

[src/client.ts:96](https://github.com/buff-beacon-project/curby-js-client/blob/6a4bdf0/src/client.ts#L96)

### ClientOptions

Ƭ **ClientOptions**: `Object`

The options for the Rng Client

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `chainId?` | `string` | Alternate chain cid for the RNG chain |
| `fetchOptions?` | `FetchOptions` | Underlying fetch options **`See`** [https://github.com/kwhitley/itty-fetcher](https://github.com/kwhitley/itty-fetcher) |
| `url?` | `string` | Alternate URL for the CURBy API |

#### Defined in

[src/client.ts:16](https://github.com/buff-beacon-project/curby-js-client/blob/6a4bdf0/src/client.ts#L16)

___

### LatestPulsePair

Ƭ **LatestPulsePair**: `Object`

A latest pulse pair

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `latest?` | `Pulse` \| ``null`` | The latest pulse |
| `prev?` | `Pulse` \| ``null`` | The previous pulse |

#### Defined in

[src/client.ts:76](https://github.com/buff-beacon-project/curby-js-client/blob/6a4bdf0/src/client.ts#L76)

___

### PulsePair

Ƭ **PulsePair**: `Object`

A pair of sequential pulses

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `chain` | `Chain` | The chain |
| `prev?` | `Pulse` \| ``null`` | The previous pulse |
| `pulse?` | `Pulse` \| ``null`` | The pulse |

#### Defined in

[src/client.ts:62](https://github.com/buff-beacon-project/curby-js-client/blob/6a4bdf0/src/client.ts#L62)

___

### RandomnessRound

Ƭ **RandomnessRound**: `Object`

A randomness round

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `chain` | `Chain` | The chain |
| `prev?` | `Pulse` \| ``null`` | The previous pulse |
| `pulse` | `Pulse` | The pulse |
| `randomness?` | [`ByteHelper`](modules.md#bytehelper) \| ``null`` | The randomness |

#### Defined in

[src/client.ts:38](https://github.com/buff-beacon-project/curby-js-client/blob/6a4bdf0/src/client.ts#L38)

## Utilities

### ByteHelper

Ƭ **ByteHelper**: `Object`

A helper for working with randomness.

Contains methods for reading bits, shuffling arrays, and more.

**`Example`**

```ts
// BytesHelper from a randomness call
const randomness = await client.randomness()

// Get a list of unsigned numbers formed by reading 10 bits at a time
const bits = Array.from(randomness.bits(10))

// Get a shuffled version of an array
const array = [1, 2, 3, 4, 5]
const shuffled = randomness.shuffled(array)
// shuffled = [3, 1, 5, 2, 4]
```

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `maxShuffleLength` | `number` | The maximum length an array can be for shuffling |
| `timestamp` | `number` | The unix timestamp of the randomness |
| `applyShuffle` | (`arr`: `any`[]) => `void` | Applies a shuffle to an array **`Example`** ```ts const array = [1, 2, 3, 4, 5] randomness.applyShuffle(array) // array = [3, 1, 5, 2, 4] ``` |
| `bits` | (`n`: `number`) => `Generator`\<`number`, `any`, `unknown`\> | A generator for reading unsigned numbers **`Example`** ```ts for (const n of randomness.bits(10)){ console.log(n) } // or create an array const numbers = Array.from(randomness.bits(10)) ``` |
| `bytes` | () => `Uint8Array` | The bytes of the randomness |
| `reader` | () => `BitReader` | The a BitReader for the randomness **`See`** [https://github.com/buff-beacon-project/rand-utils](https://github.com/buff-beacon-project/rand-utils) |
| `shuffled` | (`arr`: `any`[]) => `any`[] | Shuffles an array using the randomness **`Example`** ```ts const array = [1, 2, 3, 4, 5] const shuffled = randomness.shuffled(array) // shuffled = [3, 1, 5, 2, 4] ``` |
| `signedBits` | (`n`: `number`) => `Generator`\<`number`, `any`, `unknown`\> | A generator for reading signed numbers |
| `unfold` | (`cb`: (`reader`: `BitStream`, `index`: `number`) => `any`) => `Generator`\<`any`, `any`, `unknown`\> | Unfolds the randomness **`Example`** ```ts // A random walk const cardinal = ['north', 'east', 'south', 'west'] const path = randomness.unfold((reader) => { const n = reader.readBits(2, false) return cardinal[n] }) for (const step of path){ console.log(step) } ``` |

#### Defined in

[src/byte-helper.ts:25](https://github.com/buff-beacon-project/curby-js-client/blob/6a4bdf0/src/byte-helper.ts#L25)

___

### byteHelper

▸ **byteHelper**(`bytes`, `isoTimestamp`): [`ByteHelper`](modules.md#bytehelper)

Create a [ByteHelper](modules.md#bytehelper) from a set of bytes and a timestamp

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `isoTimestamp` | `string` |

#### Returns

[`ByteHelper`](modules.md#bytehelper)

#### Defined in

[src/byte-helper.ts:118](https://github.com/buff-beacon-project/curby-js-client/blob/6a4bdf0/src/byte-helper.ts#L118)

___

### extractRandomness

▸ **extractRandomness**(`pulse`, `chain`, `previous`): `Promise`\<`Uint8Array`\>

Extract randomness from a pulse on an RNG chain

#### Parameters

| Name | Type |
| :------ | :------ |
| `pulse` | `Pulse` |
| `chain` | `Chain` |
| `previous` | `Pulse` |

#### Returns

`Promise`\<`Uint8Array`\>

#### Defined in

[src/extract-randomness.ts:103](https://github.com/buff-beacon-project/curby-js-client/blob/6a4bdf0/src/extract-randomness.ts#L103)

___

### getPrecommitmentValue

▸ **getPrecommitmentValue**(`salt`, `previous`, `hasher?`): `Promise`\<`Digest`\<``20``, `number`\>\>

Get the precommitment value for a pulse

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `salt` | `Uint8Array` | `undefined` |
| `previous` | `Pulse` | `undefined` |
| `hasher` | `Hasher`\<``"sha3-512"``, ``20``\> | `sha3512` |

#### Returns

`Promise`\<`Digest`\<``20``, `number`\>\>

#### Defined in

[src/extract-randomness.ts:73](https://github.com/buff-beacon-project/curby-js-client/blob/6a4bdf0/src/extract-randomness.ts#L73)

___

### timeToNext

▸ **timeToNext**(`obj?`): `number`

Time until next rng pulse in milliseconds

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `obj?` | ``null`` \| `string` \| `number` \| `Pulse` \| \{ `timestamp`: `number`  } | A timestamp, pulse, or object with a timestamp property |

#### Returns

`number`

Time until next pulse in milliseconds

#### Defined in

[src/timing.ts:12](https://github.com/buff-beacon-project/curby-js-client/blob/6a4bdf0/src/timing.ts#L12)

___

### wait

▸ **wait**(`dt`, `signal?`): `Promise`\<`unknown`\>

Wait a specified number of milliseconds

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `dt` | `number` | The number of milliseconds to wait |
| `signal?` | `AbortSignal` | An optional abort signal |

#### Returns

`Promise`\<`unknown`\>

A promise that resolves after the specified time

**`Throws`**

If the signal is aborted

**`Example`**

```ts
await wait(1000)
console.log('One second has passed')
```

#### Defined in

[src/timing.ts:44](https://github.com/buff-beacon-project/curby-js-client/blob/6a4bdf0/src/timing.ts#L44)

___

### xorArrays

▸ **xorArrays**(`a`, `b`): `any`

Perform an XOR operation on two arrays

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | [`NumberArray`](modules.md#numberarray) |
| `b` | [`NumberArray`](modules.md#numberarray) |

#### Returns

`any`

#### Defined in

[src/extract-randomness.ts:47](https://github.com/buff-beacon-project/curby-js-client/blob/6a4bdf0/src/extract-randomness.ts#L47)

___

### zip

▸ **zip**(`...arrays`): `number`[][]

zip the provided arrays together

#### Parameters

| Name | Type |
| :------ | :------ |
| `...arrays` | [`NumberArray`](modules.md#numberarray)[] |

#### Returns

`number`[][]

#### Defined in

[src/extract-randomness.ts:34](https://github.com/buff-beacon-project/curby-js-client/blob/6a4bdf0/src/extract-randomness.ts#L34)

## Validations

### Validation

Ƭ **Validation**: `Object`

A validation result

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `ok` | `boolean` | Whether the validation passed |
| `reason?` | `string` | An optional reason for failure |

#### Defined in

[src/dirng.ts:21](https://github.com/buff-beacon-project/curby-js-client/blob/6a4bdf0/src/dirng.ts#L21)

___

### checkValidPrecommitmentValue

▸ **checkValidPrecommitmentValue**(`pulse`, `previous`, `hasher?`): `Promise`\<`boolean`\>

Check if a precommitment value is valid

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `pulse` | `Pulse` | `undefined` |
| `previous` | `Pulse` | `undefined` |
| `hasher` | `Hasher`\<``"sha3-512"``, ``20``\> | `sha3512` |

#### Returns

`Promise`\<`boolean`\>

#### Defined in

[src/extract-randomness.ts:83](https://github.com/buff-beacon-project/curby-js-client/blob/6a4bdf0/src/extract-randomness.ts#L83)

___

### usesDeterministicAlgorithm

▸ **usesDeterministicAlgorithm**(`signature`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `signature` | `string` |

#### Returns

`boolean`

#### Defined in

[src/extract-randomness.ts:63](https://github.com/buff-beacon-project/curby-js-client/blob/6a4bdf0/src/extract-randomness.ts#L63)

___

### validateBellResponse

▸ **validateBellResponse**(`round`, `resolver`): `Promise`\<[`Validation`](modules.md#validation)\>

Validate a bell response pulse

#### Parameters

| Name | Type |
| :------ | :------ |
| `round` | [`RoundData`](modules.md#rounddata) |
| `resolver` | `Resolver` |

#### Returns

`Promise`\<[`Validation`](modules.md#validation)\>

#### Defined in

[src/dirng.ts:203](https://github.com/buff-beacon-project/curby-js-client/blob/6a4bdf0/src/dirng.ts#L203)

___

### validateSeed

▸ **validateSeed**(`round`, `resolver`, `params`): `Promise`\<[`Validation`](modules.md#validation)\>

Validate the seed value

#### Parameters

| Name | Type |
| :------ | :------ |
| `round` | [`RoundData`](modules.md#rounddata) |
| `resolver` | `Resolver` |
| `params` | `any` |

#### Returns

`Promise`\<[`Validation`](modules.md#validation)\>

#### Defined in

[src/dirng.ts:233](https://github.com/buff-beacon-project/curby-js-client/blob/6a4bdf0/src/dirng.ts#L233)

___

### validateSeedOrdering

▸ **validateSeedOrdering**(`round`, `resolver`): `Promise`\<[`Validation`](modules.md#validation)\>

Validate the ordering of the seed pulse

#### Parameters

| Name | Type |
| :------ | :------ |
| `round` | [`RoundData`](modules.md#rounddata) |
| `resolver` | `Resolver` |

#### Returns

`Promise`\<[`Validation`](modules.md#validation)\>

#### Defined in

[src/dirng.ts:218](https://github.com/buff-beacon-project/curby-js-client/blob/6a4bdf0/src/dirng.ts#L218)
