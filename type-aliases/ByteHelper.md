[**@buff-beacon-project/curby-client**](../index.md) • **Docs**

***

[@buff-beacon-project/curby-client](../index.md) / ByteHelper

# Type Alias: ByteHelper

> **ByteHelper**: `object`

A helper for working with randomness.

Contains methods for reading bits, shuffling arrays, and more.

## Type declaration

### maxShuffleLength

> **maxShuffleLength**: `number`

The maximum length an array can be for shuffling

### timestamp

> **timestamp**: `number`

The unix timestamp of the randomness

### applyShuffle()

Applies a shuffle to an array

#### Parameters

• **arr**: `any`[]

The array to shuffle

#### Returns

`void`

#### Example

```ts
const array = [1, 2, 3, 4, 5]
randomness.applyShuffle(array)
// array = [3, 1, 5, 2, 4]
```

### bits()

A generator for reading unsigned numbers

#### Parameters

• **n**: `number`

The number of bits to read at a time

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

### bytes()

The bytes of the randomness

#### Returns

`Uint8Array`

### reader()

The a BitReader for the randomness

#### Returns

`BitReader`

#### See

[https://github.com/buff-beacon-project/rand-utils](https://github.com/buff-beacon-project/rand-utils)

### shuffled()

Shuffles an array using the randomness

#### Parameters

• **arr**: `any`[]

The array to shuffle

#### Returns

`any`[]

#### Example

```ts
const array = [1, 2, 3, 4, 5]
const shuffled = randomness.shuffled(array)
// shuffled = [3, 1, 5, 2, 4]
```

### signedBits()

A generator for reading signed numbers

#### Parameters

• **n**: `number`

The number of bits to read at a time

See ByteHelper.bits for an example

#### Returns

`Generator`\<`number`, `any`, `any`\>

### unfold()

Unfolds the randomness

#### Parameters

• **cb**

A function to call for each iteration

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

## Defined in

[src/byte-helper.ts:25](https://github.com/buff-beacon-project/curby-js-client/blob/e85b824d126d92d22842a10bef1c81bb4fdd007c/src/byte-helper.ts#L25)
