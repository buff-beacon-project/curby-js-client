[**@buff-beacon-project/curby-client**](../index.md) • **Docs**

***

[@buff-beacon-project/curby-client](../index.md) / ByteHelper

# Interface: ByteHelper

A helper for working with randomness.

Contains methods for reading bits, shuffling arrays, and more.

## Example

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

## Properties

| Property | Type | Description | Defined in |
| ------ | ------ | ------ | ------ |
| `maxShuffleLength` | `number` | The maximum length an array can be for shuffling | [src/byte-helper.ts:69](https://github.com/buff-beacon-project/curby-js-client/blob/95397f5e9fcc8ad57ef410c54473862e0b83bc59/src/byte-helper.ts#L69) |
| `timestamp` | `number` | The unix timestamp of the randomness | [src/byte-helper.ts:29](https://github.com/buff-beacon-project/curby-js-client/blob/95397f5e9fcc8ad57ef410c54473862e0b83bc59/src/byte-helper.ts#L29) |

## Methods

### applyShuffle()

> **applyShuffle**(`arr`): `void`

Applies a shuffle to an array

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `arr` | `any`[] | The array to shuffle |

#### Returns

`void`

#### Example

```ts
const array = [1, 2, 3, 4, 5]
randomness.applyShuffle(array)
// array = [3, 1, 5, 2, 4]
```

#### Defined in

[src/byte-helper.ts:95](https://github.com/buff-beacon-project/curby-js-client/blob/95397f5e9fcc8ad57ef410c54473862e0b83bc59/src/byte-helper.ts#L95)

***

### bits()

> **bits**(`n`): `Generator`\<`number`, `any`, `any`\>

A generator for reading unsigned numbers

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `n` | `number` | The number of bits to read at a time |

#### Returns

`Generator`\<`number`, `any`, `any`\>

#### Example

```ts
for (const n of randomness.bits(10)){
  console.log(n)
}
// or create an array
const numbers = Array.from(randomness.bits(10))
```

#### Defined in

[src/byte-helper.ts:47](https://github.com/buff-beacon-project/curby-js-client/blob/95397f5e9fcc8ad57ef410c54473862e0b83bc59/src/byte-helper.ts#L47)

***

### bytes()

> **bytes**(): `Uint8Array`

The bytes of the randomness

#### Returns

`Uint8Array`

#### Defined in

[src/byte-helper.ts:33](https://github.com/buff-beacon-project/curby-js-client/blob/95397f5e9fcc8ad57ef410c54473862e0b83bc59/src/byte-helper.ts#L33)

***

### reader()

> **reader**(): `BitReader`

The a BitReader for the randomness

#### Returns

`BitReader`

#### See

[https://github.com/buff-beacon-project/rand-utils](https://github.com/buff-beacon-project/rand-utils)

#### Defined in

[src/byte-helper.ts:65](https://github.com/buff-beacon-project/curby-js-client/blob/95397f5e9fcc8ad57ef410c54473862e0b83bc59/src/byte-helper.ts#L65)

***

### shuffled()

> **shuffled**(`arr`): `any`[]

Shuffles an array using the randomness

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `arr` | `any`[] | The array to shuffle |

#### Returns

`any`[]

#### Example

```ts
const array = [1, 2, 3, 4, 5]
const shuffled = randomness.shuffled(array)
// shuffled = [3, 1, 5, 2, 4]
```

#### Defined in

[src/byte-helper.ts:82](https://github.com/buff-beacon-project/curby-js-client/blob/95397f5e9fcc8ad57ef410c54473862e0b83bc59/src/byte-helper.ts#L82)

***

### signedBits()

> **signedBits**(`n`): `Generator`\<`number`, `any`, `any`\>

A generator for reading signed numbers

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `n` | `number` | The number of bits to read at a time See [ByteHelper.bits](ByteHelper.md#bits) for an example |

#### Returns

`Generator`\<`number`, `any`, `any`\>

#### Defined in

[src/byte-helper.ts:55](https://github.com/buff-beacon-project/curby-js-client/blob/95397f5e9fcc8ad57ef410c54473862e0b83bc59/src/byte-helper.ts#L55)

***

### stream()

> **stream**(): `BitStream`

The BitStream for the randomness

#### Returns

`BitStream`

#### Defined in

[src/byte-helper.ts:59](https://github.com/buff-beacon-project/curby-js-client/blob/95397f5e9fcc8ad57ef410c54473862e0b83bc59/src/byte-helper.ts#L59)

***

### unfold()

> **unfold**(`cb`): `Generator`\<`any`, `any`, `any`\>

Unfolds the randomness

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `cb` | (`reader`, `index`) => `any` | A function to call for each iteration |

#### Returns

`Generator`\<`any`, `any`, `any`\>

#### Example

```ts
// A random walk
const cardinal = ['north', 'east', 'south', 'west']
const path = randomness.unfold((reader) => {
  const n = reader.readBits(2, false)
  return cardinal[n]
})
for (const step of path){
  console.log(step)
}
```

#### Defined in

[src/byte-helper.ts:114](https://github.com/buff-beacon-project/curby-js-client/blob/95397f5e9fcc8ad57ef410c54473862e0b83bc59/src/byte-helper.ts#L114)
