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

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `options`? | [`ClientOptions`](../type-aliases/ClientOptions.md) | The options for the client |

#### Returns

[`Client`](Client.md)

#### Defined in

[src/client.ts:112](https://github.com/buff-beacon-project/curby-js-client/blob/95397f5e9fcc8ad57ef410c54473862e0b83bc59/src/client.ts#L112)

## Methods

### fetchPulsePair()

> **fetchPulsePair**(`indexOrCid`?): `Promise`\<[`PulsePair`](../type-aliases/PulsePair.md)\>

Fetch the a pulse and its predecessor by index or CID

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `indexOrCid`? | `number` \| `IntoCid` |

#### Returns

`Promise`\<[`PulsePair`](../type-aliases/PulsePair.md)\>

#### Defined in

[src/client.ts:121](https://github.com/buff-beacon-project/curby-js-client/blob/95397f5e9fcc8ad57ef410c54473862e0b83bc59/src/client.ts#L121)

***

### latest()

> **latest**(): `Promise`\<`undefined` \| [`RandomnessRound`](../type-aliases/RandomnessRound.md)\>

Get the latest round data

#### Returns

`Promise`\<`undefined` \| [`RandomnessRound`](../type-aliases/RandomnessRound.md)\>

#### Defined in

[src/client.ts:191](https://github.com/buff-beacon-project/curby-js-client/blob/95397f5e9fcc8ad57ef410c54473862e0b83bc59/src/client.ts#L191)

***

### pair()

> **pair**(): `Promise`\<[`LatestPulsePair`](../type-aliases/LatestPulsePair.md)\>

Get the latest and previous pulse

#### Returns

`Promise`\<[`LatestPulsePair`](../type-aliases/LatestPulsePair.md)\>

#### Defined in

[src/client.ts:207](https://github.com/buff-beacon-project/curby-js-client/blob/95397f5e9fcc8ad57ef410c54473862e0b83bc59/src/client.ts#L207)

***

### prev()

> **prev**(): `Promise`\<`undefined` \| `null` \| `Pulse`\>

Get the previous pulse

#### Returns

`Promise`\<`undefined` \| `null` \| `Pulse`\>

#### Defined in

[src/client.ts:199](https://github.com/buff-beacon-project/curby-js-client/blob/95397f5e9fcc8ad57ef410c54473862e0b83bc59/src/client.ts#L199)

***

### randomness()

> **randomness**(`round`?): `Promise`\<`null` \| [`ByteHelper`](../interfaces/ByteHelper.md)\>

Get the latest randomness or the randomness for a specific round

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `round`? | `number` |

#### Returns

`Promise`\<`null` \| [`ByteHelper`](../interfaces/ByteHelper.md)\>

#### Defined in

[src/client.ts:166](https://github.com/buff-beacon-project/curby-js-client/blob/95397f5e9fcc8ad57ef410c54473862e0b83bc59/src/client.ts#L166)

***

### refresh()

> **refresh**(): `Promise`\<`undefined` \| [`RandomnessRound`](../type-aliases/RandomnessRound.md)\>

Refresh the internal state of the client

#### Returns

`Promise`\<`undefined` \| [`RandomnessRound`](../type-aliases/RandomnessRound.md)\>

#### Defined in

[src/client.ts:144](https://github.com/buff-beacon-project/curby-js-client/blob/95397f5e9fcc8ad57ef410c54473862e0b83bc59/src/client.ts#L144)

***

### waitForNext()

> **waitForNext**(`__namedParameters`): `Promise`\<`undefined` \| [`RandomnessRound`](../type-aliases/RandomnessRound.md)\>

Wait for the next pulse

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `__namedParameters` | [`WaitOptions`](../type-aliases/WaitOptions.md) |

#### Returns

`Promise`\<`undefined` \| [`RandomnessRound`](../type-aliases/RandomnessRound.md)\>

#### Defined in

[src/client.ts:218](https://github.com/buff-beacon-project/curby-js-client/blob/95397f5e9fcc8ad57ef410c54473862e0b83bc59/src/client.ts#L218)

***

### watch()

> **watch**(`options`?): `AsyncGenerator`\<`undefined` \| [`RandomnessRound`](../type-aliases/RandomnessRound.md), `void`, `unknown`\>

Poll for the latest randomness

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `options`? | [`WaitOptions`](../type-aliases/WaitOptions.md) | The options for waiting |

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

[src/client.ts:255](https://github.com/buff-beacon-project/curby-js-client/blob/95397f5e9fcc8ad57ef410c54473862e0b83bc59/src/client.ts#L255)

***

### create()

> `static` **create**(`options`?): [`Client`](Client.md)

Create a new client

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `options`? | [`ClientOptions`](../type-aliases/ClientOptions.md) | The options for the client |

#### Returns

[`Client`](Client.md)

#### Defined in

[src/client.ts:105](https://github.com/buff-beacon-project/curby-js-client/blob/95397f5e9fcc8ad57ef410c54473862e0b83bc59/src/client.ts#L105)
