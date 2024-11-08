[**@buff-beacon-project/curby-client**](../index.md) • **Docs**

***

[@buff-beacon-project/curby-client](../index.md) / Client

# Class: Client

A client for fetching randomness from the CURBy RNG chain

## Example

```ts
import { Client } from '@buff-beacon-project/curby-client'

const client = Client.create()
const randomness = await client.randomness()
console.log(randomness)
```

## Constructors

### new Client()

> **new Client**(`options`?): [`Client`](Client.md)

#### Parameters

• **options?**: [`ClientOptions`](../type-aliases/ClientOptions.md)

The options for the client

#### Returns

[`Client`](Client.md)

#### Defined in

[src/client.ts:112](https://github.com/buff-beacon-project/curby-js-client/blob/07a2ea08c8e0ca63b47f1d08219657d53af485a2/src/client.ts#L112)

## Methods

### fetchPulsePair()

> **fetchPulsePair**(`indexOrCid`?): `Promise`\<[`PulsePair`](../type-aliases/PulsePair.md)\>

Fetch the a pulse and its predecessor by index or CID

#### Parameters

• **indexOrCid?**: `number` \| `IntoCid`

#### Returns

`Promise`\<[`PulsePair`](../type-aliases/PulsePair.md)\>

#### Defined in

[src/client.ts:121](https://github.com/buff-beacon-project/curby-js-client/blob/07a2ea08c8e0ca63b47f1d08219657d53af485a2/src/client.ts#L121)

***

### latest()

> **latest**(): `Promise`\<`undefined` \| [`RandomnessRound`](../type-aliases/RandomnessRound.md)\>

Get the latest round data

#### Returns

`Promise`\<`undefined` \| [`RandomnessRound`](../type-aliases/RandomnessRound.md)\>

#### Defined in

[src/client.ts:174](https://github.com/buff-beacon-project/curby-js-client/blob/07a2ea08c8e0ca63b47f1d08219657d53af485a2/src/client.ts#L174)

***

### pair()

> **pair**(): `Promise`\<[`LatestPulsePair`](../type-aliases/LatestPulsePair.md)\>

Get the latest and previous pulse

#### Returns

`Promise`\<[`LatestPulsePair`](../type-aliases/LatestPulsePair.md)\>

#### Defined in

[src/client.ts:190](https://github.com/buff-beacon-project/curby-js-client/blob/07a2ea08c8e0ca63b47f1d08219657d53af485a2/src/client.ts#L190)

***

### prev()

> **prev**(): `Promise`\<`undefined` \| `null` \| `Pulse`\>

Get the previous pulse

#### Returns

`Promise`\<`undefined` \| `null` \| `Pulse`\>

#### Defined in

[src/client.ts:182](https://github.com/buff-beacon-project/curby-js-client/blob/07a2ea08c8e0ca63b47f1d08219657d53af485a2/src/client.ts#L182)

***

### randomness()

> **randomness**(): `Promise`\<`undefined` \| `null` \| [`ByteHelper`](../type-aliases/ByteHelper.md)\>

Get the latest randomness

#### Returns

`Promise`\<`undefined` \| `null` \| [`ByteHelper`](../type-aliases/ByteHelper.md)\>

#### Defined in

[src/client.ts:166](https://github.com/buff-beacon-project/curby-js-client/blob/07a2ea08c8e0ca63b47f1d08219657d53af485a2/src/client.ts#L166)

***

### refresh()

> **refresh**(): `Promise`\<`undefined` \| [`RandomnessRound`](../type-aliases/RandomnessRound.md)\>

Refresh the internal state of the client

#### Returns

`Promise`\<`undefined` \| [`RandomnessRound`](../type-aliases/RandomnessRound.md)\>

#### Defined in

[src/client.ts:144](https://github.com/buff-beacon-project/curby-js-client/blob/07a2ea08c8e0ca63b47f1d08219657d53af485a2/src/client.ts#L144)

***

### waitForNext()

> **waitForNext**(`__namedParameters`): `Promise`\<`undefined` \| [`RandomnessRound`](../type-aliases/RandomnessRound.md)\>

Wait for the next pulse

#### Parameters

• **\_\_namedParameters**: [`WaitOptions`](../type-aliases/WaitOptions.md) = `{}`

#### Returns

`Promise`\<`undefined` \| [`RandomnessRound`](../type-aliases/RandomnessRound.md)\>

#### Defined in

[src/client.ts:201](https://github.com/buff-beacon-project/curby-js-client/blob/07a2ea08c8e0ca63b47f1d08219657d53af485a2/src/client.ts#L201)

***

### watch()

> **watch**(`options`?): `AsyncGenerator`\<`undefined` \| [`RandomnessRound`](../type-aliases/RandomnessRound.md), `void`, `unknown`\>

Poll for the latest randomness

#### Parameters

• **options?**: [`WaitOptions`](../type-aliases/WaitOptions.md)

The options for waiting

#### Returns

`AsyncGenerator`\<`undefined` \| [`RandomnessRound`](../type-aliases/RandomnessRound.md), `void`, `unknown`\>

#### Example

```ts
const client = Client.create()
for await (const round of client.watch()){
  console.log(round.randomness)
}
```

#### Defined in

[src/client.ts:238](https://github.com/buff-beacon-project/curby-js-client/blob/07a2ea08c8e0ca63b47f1d08219657d53af485a2/src/client.ts#L238)

***

### create()

> `static` **create**(`options`?): [`Client`](Client.md)

Create a new client

#### Parameters

• **options?**: [`ClientOptions`](../type-aliases/ClientOptions.md)

The options for the client

#### Returns

[`Client`](Client.md)

#### Defined in

[src/client.ts:105](https://github.com/buff-beacon-project/curby-js-client/blob/07a2ea08c8e0ca63b47f1d08219657d53af485a2/src/client.ts#L105)
