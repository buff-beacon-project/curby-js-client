[@buff-beacon-project/curby-client](README.md) / Exports

# @buff-beacon-project/curby-client

## Table of contents

### Classes

- [Client](classes/Client.md)
- [DIRNGClient](classes/DIRNGClient.md)
- [InvalidPrecom](classes/InvalidPrecom.md)

### Type Aliases

- [ByteHelper](modules.md#bytehelper)
- [ClientOptions](modules.md#clientoptions)
- [DIRNGClientOptions](modules.md#dirngclientoptions)
- [LatestPulsePair](modules.md#latestpulsepair)
- [NumberArray](modules.md#numberarray)
- [PulsePair](modules.md#pulsepair)
- [RandomnessRound](modules.md#randomnessround)
- [RoundData](modules.md#rounddata)
- [RoundValidations](modules.md#roundvalidations)
- [Validation](modules.md#validation)
- [WaitOptions](modules.md#waitoptions)

### Variables

- [CHAINS](modules.md#chains)
- [CURBY\_API\_URL](modules.md#curby_api_url)

### Functions

- [byteHelper](modules.md#bytehelper-1)
- [checkValidPrecommitmentValue](modules.md#checkvalidprecommitmentvalue)
- [extractRandomness](modules.md#extractrandomness)
- [getPrecommitmentValue](modules.md#getprecommitmentvalue)
- [pulsesToRoundData](modules.md#pulsestorounddata)
- [timeToNext](modules.md#timetonext)
- [usesDeterministicAlgorithm](modules.md#usesdeterministicalgorithm)
- [validateBellResponse](modules.md#validatebellresponse)
- [validateSeed](modules.md#validateseed)
- [validateSeedOrdering](modules.md#validateseedordering)
- [wait](modules.md#wait)
- [withValidations](modules.md#withvalidations)
- [xorArrays](modules.md#xorarrays)
- [zip](modules.md#zip)

## Type Aliases

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
| `reader` | () => `BitStream` | The a BitReader for the randomness **`See`** [https://github.com/buff-beacon-project/rand-utils](https://github.com/buff-beacon-project/rand-utils) |
| `shuffled` | (`arr`: `any`[]) => `any`[] | Shuffles an array using the randomness **`Example`** ```ts const array = [1, 2, 3, 4, 5] const shuffled = randomness.shuffled(array) // shuffled = [3, 1, 5, 2, 4] ``` |
| `signedBits` | (`n`: `number`) => `Generator`\<`number`, `any`, `unknown`\> | A generator for reading signed numbers |
| `unfold` | (`cb`: (`reader`: `BitStream`, `index`: `number`) => `any`) => `Generator`\<`any`, `any`, `unknown`\> | Unfolds the randomness **`Example`** ```ts // A random walk const cardinal = ['north', 'east', 'south', 'west'] const path = randomness.unfold((reader) => { const n = reader.readBits(2, false) return cardinal[n] }) for (const step of path){ console.log(step) } ``` |

#### Defined in

[src/byte-helper.ts:24](https://github.com/buff-beacon-project/curby-js-client/blob/b8d739f/src/byte-helper.ts#L24)

___

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

[src/client.ts:14](https://github.com/buff-beacon-project/curby-js-client/blob/b8d739f/src/client.ts#L14)

___

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

[src/dirng.ts:309](https://github.com/buff-beacon-project/curby-js-client/blob/b8d739f/src/dirng.ts#L309)

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

[src/client.ts:68](https://github.com/buff-beacon-project/curby-js-client/blob/b8d739f/src/client.ts#L68)

___

### NumberArray

Ƭ **NumberArray**: `number`[] \| `Uint8Array` \| `Uint16Array` \| `Uint32Array` \| `Float32Array`

A type for arrays of numbers

#### Defined in

[src/extract-randomness.ts:25](https://github.com/buff-beacon-project/curby-js-client/blob/b8d739f/src/extract-randomness.ts#L25)

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

[src/client.ts:56](https://github.com/buff-beacon-project/curby-js-client/blob/b8d739f/src/client.ts#L56)

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

[src/client.ts:34](https://github.com/buff-beacon-project/curby-js-client/blob/b8d739f/src/client.ts#L34)

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

[src/dirng.ts:51](https://github.com/buff-beacon-project/curby-js-client/blob/b8d739f/src/dirng.ts#L51)

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

[src/dirng.ts:33](https://github.com/buff-beacon-project/curby-js-client/blob/b8d739f/src/dirng.ts#L33)

___

### Validation

Ƭ **Validation**: `Object`

A validation result

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `ok` | `boolean` | Whether the validation passed |
| `reason?` | `string` | An optional reason for failure |

#### Defined in

[src/dirng.ts:19](https://github.com/buff-beacon-project/curby-js-client/blob/b8d739f/src/dirng.ts#L19)

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

[src/common.ts:10](https://github.com/buff-beacon-project/curby-js-client/blob/b8d739f/src/common.ts#L10)

## Variables

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

[src/chains.js:5](https://github.com/buff-beacon-project/curby-js-client/blob/b8d739f/src/chains.js#L5)

___

### CURBY\_API\_URL

• `Const` **CURBY\_API\_URL**: ``"https://api.entwine.me"``

The base URL for the CURBy API

#### Defined in

[src/common.ts:4](https://github.com/buff-beacon-project/curby-js-client/blob/b8d739f/src/common.ts#L4)

## Functions

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

[src/byte-helper.ts:115](https://github.com/buff-beacon-project/curby-js-client/blob/b8d739f/src/byte-helper.ts#L115)

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

[src/extract-randomness.ts:71](https://github.com/buff-beacon-project/curby-js-client/blob/b8d739f/src/extract-randomness.ts#L71)

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

[src/extract-randomness.ts:89](https://github.com/buff-beacon-project/curby-js-client/blob/b8d739f/src/extract-randomness.ts#L89)

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

[src/extract-randomness.ts:63](https://github.com/buff-beacon-project/curby-js-client/blob/b8d739f/src/extract-randomness.ts#L63)

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

[src/dirng.ts:260](https://github.com/buff-beacon-project/curby-js-client/blob/b8d739f/src/dirng.ts#L260)

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

[src/timing.ts:11](https://github.com/buff-beacon-project/curby-js-client/blob/b8d739f/src/timing.ts#L11)

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

[src/extract-randomness.ts:55](https://github.com/buff-beacon-project/curby-js-client/blob/b8d739f/src/extract-randomness.ts#L55)

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

[src/dirng.ts:191](https://github.com/buff-beacon-project/curby-js-client/blob/b8d739f/src/dirng.ts#L191)

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

[src/dirng.ts:217](https://github.com/buff-beacon-project/curby-js-client/blob/b8d739f/src/dirng.ts#L217)

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

[src/dirng.ts:204](https://github.com/buff-beacon-project/curby-js-client/blob/b8d739f/src/dirng.ts#L204)

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

[src/timing.ts:42](https://github.com/buff-beacon-project/curby-js-client/blob/b8d739f/src/timing.ts#L42)

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

[src/dirng.ts:237](https://github.com/buff-beacon-project/curby-js-client/blob/b8d739f/src/dirng.ts#L237)

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

[src/extract-randomness.ts:41](https://github.com/buff-beacon-project/curby-js-client/blob/b8d739f/src/extract-randomness.ts#L41)

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

[src/extract-randomness.ts:30](https://github.com/buff-beacon-project/curby-js-client/blob/b8d739f/src/extract-randomness.ts#L30)
