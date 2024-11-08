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

[src/dirng.ts:393](https://github.com/buff-beacon-project/curby-js-client/blob/e85b824d126d92d22842a10bef1c81bb4fdd007c/src/dirng.ts#L393)

## Methods

### fetchRound()

> **fetchRound**(`round`?): `Promise`\<[`RoundData`](../type-aliases/RoundData.md)\>

Fetch and validate the round data for a round

#### Parameters

• **round?**: `number` \| `"latest"` \| `"pending"`

#### Returns

`Promise`\<[`RoundData`](../type-aliases/RoundData.md)\>

#### Defined in

[src/dirng.ts:458](https://github.com/buff-beacon-project/curby-js-client/blob/e85b824d126d92d22842a10bef1c81bb4fdd007c/src/dirng.ts#L458)

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

[src/dirng.ts:432](https://github.com/buff-beacon-project/curby-js-client/blob/e85b824d126d92d22842a10bef1c81bb4fdd007c/src/dirng.ts#L432)

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

[src/dirng.ts:408](https://github.com/buff-beacon-project/curby-js-client/blob/e85b824d126d92d22842a10bef1c81bb4fdd007c/src/dirng.ts#L408)

***

### latest()

> **latest**(): `Promise`\<[`RoundData`](../type-aliases/RoundData.md)\>

Get the latest round data

#### Returns

`Promise`\<[`RoundData`](../type-aliases/RoundData.md)\>

#### Defined in

[src/dirng.ts:511](https://github.com/buff-beacon-project/curby-js-client/blob/e85b824d126d92d22842a10bef1c81bb4fdd007c/src/dirng.ts#L511)

***

### randomness()

> **randomness**(): `Promise`\<[`ByteHelper`](../type-aliases/ByteHelper.md)\>

Get the latest randomness

#### Returns

`Promise`\<[`ByteHelper`](../type-aliases/ByteHelper.md)\>

#### Defined in

[src/dirng.ts:503](https://github.com/buff-beacon-project/curby-js-client/blob/e85b824d126d92d22842a10bef1c81bb4fdd007c/src/dirng.ts#L503)

***

### refresh()

> **refresh**(): `Promise`\<`void`\>

Refresh the internal state of the client

#### Returns

`Promise`\<`void`\>

#### Defined in

[src/dirng.ts:490](https://github.com/buff-beacon-project/curby-js-client/blob/e85b824d126d92d22842a10bef1c81bb4fdd007c/src/dirng.ts#L490)

***

### waitForNext()

> **waitForNext**(`__namedParameters`): `Promise`\<`undefined` \| [`RoundData`](../type-aliases/RoundData.md)\>

Wait for the next round

#### Parameters

• **\_\_namedParameters**: [`WaitOptions`](../type-aliases/WaitOptions.md) = `{}`

#### Returns

`Promise`\<`undefined` \| [`RoundData`](../type-aliases/RoundData.md)\>

#### Defined in

[src/dirng.ts:519](https://github.com/buff-beacon-project/curby-js-client/blob/e85b824d126d92d22842a10bef1c81bb4fdd007c/src/dirng.ts#L519)

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

[src/dirng.ts:556](https://github.com/buff-beacon-project/curby-js-client/blob/e85b824d126d92d22842a10bef1c81bb4fdd007c/src/dirng.ts#L556)

***

### create()

> `static` **create**(`options`?): [`DIRNGClient`](DIRNGClient.md)

Create a new client

#### Parameters

• **options?**: [`DIRNGClientOptions`](../type-aliases/DIRNGClientOptions.md)

#### Returns

[`DIRNGClient`](DIRNGClient.md)

#### Defined in

[src/dirng.ts:385](https://github.com/buff-beacon-project/curby-js-client/blob/e85b824d126d92d22842a10bef1c81bb4fdd007c/src/dirng.ts#L385)
