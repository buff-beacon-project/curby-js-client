[**@buff-beacon-project/curby-client**](../index.md) • **Docs**

***

[@buff-beacon-project/curby-client](../index.md) / DIRNGClient

# Class: DIRNGClient

A client for the Device Independent Randomness Generation (DIRNG) chain

## Example

```ts
import { DIRNGClient } from '@buff-beacon-project/curby-client'

const client = DIRNGClient.create()
const randomness = await client.randomness()
console.log(randomness)
```

## Constructors

### new DIRNGClient()

> **new DIRNGClient**(`options`?): [`DIRNGClient`](DIRNGClient.md)

Create a new client

#### Parameters

• **options?**: [`DIRNGClientOptions`](../type-aliases/DIRNGClientOptions.md)

The options for the client

#### Returns

[`DIRNGClient`](DIRNGClient.md)

#### Defined in

[src/dirng.ts:407](https://github.com/buff-beacon-project/curby-js-client/blob/ad263e3f2ef194a96a0a2fa193e82c0d10bbd65c/src/dirng.ts#L407)

## Methods

### fetchRound()

> **fetchRound**(`round`?): `Promise`\<[`RoundData`](../type-aliases/RoundData.md)\>

Fetch and validate the round data for a round

#### Parameters

• **round?**: `number` \| `"latest"` \| `"pending"`

#### Returns

`Promise`\<[`RoundData`](../type-aliases/RoundData.md)\>

#### Defined in

[src/dirng.ts:470](https://github.com/buff-beacon-project/curby-js-client/blob/ad263e3f2ef194a96a0a2fa193e82c0d10bbd65c/src/dirng.ts#L470)

***

### fetchRoundData()

> **fetchRoundData**(`round`): `Promise`\<`string`\>

Fetch the raw bell data for a round

Will validate the hash of the data

#### Parameters

• **round**: [`RoundData`](../type-aliases/RoundData.md)

#### Returns

`Promise`\<`string`\>

#### Defined in

[src/dirng.ts:446](https://github.com/buff-beacon-project/curby-js-client/blob/ad263e3f2ef194a96a0a2fa193e82c0d10bbd65c/src/dirng.ts#L446)

***

### fetchRoundParams()

> **fetchRoundParams**(`round`): `Promise`\<`any`\>

Fetch the parameters for a round

Will validate the hash of the parameters

#### Parameters

• **round**: [`RoundData`](../type-aliases/RoundData.md)

#### Returns

`Promise`\<`any`\>

#### Defined in

[src/dirng.ts:422](https://github.com/buff-beacon-project/curby-js-client/blob/ad263e3f2ef194a96a0a2fa193e82c0d10bbd65c/src/dirng.ts#L422)

***

### latest()

> **latest**(): `Promise`\<[`RoundData`](../type-aliases/RoundData.md)\>

Get the latest round data

#### Returns

`Promise`\<[`RoundData`](../type-aliases/RoundData.md)\>

#### Defined in

[src/dirng.ts:523](https://github.com/buff-beacon-project/curby-js-client/blob/ad263e3f2ef194a96a0a2fa193e82c0d10bbd65c/src/dirng.ts#L523)

***

### randomness()

> **randomness**(): `Promise`\<[`ByteHelper`](../type-aliases/ByteHelper.md)\>

Get the latest randomness

#### Returns

`Promise`\<[`ByteHelper`](../type-aliases/ByteHelper.md)\>

#### Defined in

[src/dirng.ts:515](https://github.com/buff-beacon-project/curby-js-client/blob/ad263e3f2ef194a96a0a2fa193e82c0d10bbd65c/src/dirng.ts#L515)

***

### refresh()

> **refresh**(): `Promise`\<`void`\>

Refresh the internal state of the client

#### Returns

`Promise`\<`void`\>

#### Defined in

[src/dirng.ts:502](https://github.com/buff-beacon-project/curby-js-client/blob/ad263e3f2ef194a96a0a2fa193e82c0d10bbd65c/src/dirng.ts#L502)

***

### waitForNext()

> **waitForNext**(`__namedParameters`): `Promise`\<`undefined` \| [`RoundData`](../type-aliases/RoundData.md)\>

Wait for the next round

#### Parameters

• **\_\_namedParameters**: [`WaitOptions`](../type-aliases/WaitOptions.md) = `{}`

#### Returns

`Promise`\<`undefined` \| [`RoundData`](../type-aliases/RoundData.md)\>

#### Defined in

[src/dirng.ts:531](https://github.com/buff-beacon-project/curby-js-client/blob/ad263e3f2ef194a96a0a2fa193e82c0d10bbd65c/src/dirng.ts#L531)

***

### watch()

> **watch**(`options`?): `AsyncGenerator`\<[`RoundData`](../type-aliases/RoundData.md), `void`, `unknown`\>

Watch for new rounds

#### Parameters

• **options?**: [`WaitOptions`](../type-aliases/WaitOptions.md)

The options for waiting

#### Returns

`AsyncGenerator`\<[`RoundData`](../type-aliases/RoundData.md), `void`, `unknown`\>

#### Example

```ts
const client = DIRNGClient.create()
for await (const round of client.watch()){
  console.log(round)
}

#### Defined in

[src/dirng.ts:568](https://github.com/buff-beacon-project/curby-js-client/blob/ad263e3f2ef194a96a0a2fa193e82c0d10bbd65c/src/dirng.ts#L568)

***

### create()

> `static` **create**(`options`?): [`DIRNGClient`](DIRNGClient.md)

Create a new client

#### Parameters

• **options?**: [`DIRNGClientOptions`](../type-aliases/DIRNGClientOptions.md)

#### Returns

[`DIRNGClient`](DIRNGClient.md)

#### Defined in

[src/dirng.ts:399](https://github.com/buff-beacon-project/curby-js-client/blob/ad263e3f2ef194a96a0a2fa193e82c0d10bbd65c/src/dirng.ts#L399)
