[@buff-beacon-project/curby-client](../README.md) / [Exports](../modules.md) / Client

# Class: Client

A client for fetching randomness from the CURBy RNG chain

**`Example`**

```ts
import { Client } from '@buff-beacon-project/curby-client'

const client = Client.create()
const randomness = await client.randomness()
console.log(randomness)
```

## Table of contents

### Constructors

- [constructor](Client.md#constructor)

### Methods

- [fetchPulsePair](Client.md#fetchpulsepair)
- [latest](Client.md#latest)
- [pair](Client.md#pair)
- [prev](Client.md#prev)
- [randomness](Client.md#randomness)
- [refresh](Client.md#refresh)
- [waitForNext](Client.md#waitfornext)
- [watch](Client.md#watch)
- [create](Client.md#create)

## Constructors

### constructor

• **new Client**(`options?`): [`Client`](Client.md)

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `options?` | [`ClientOptions`](../modules.md#clientoptions) | The options for the client |

#### Returns

[`Client`](Client.md)

#### Defined in

[src/client.ts:112](https://github.com/buff-beacon-project/curby-js-client/blob/fd01cad/src/client.ts#L112)

## Methods

### fetchPulsePair

▸ **fetchPulsePair**(`indexOrCid?`): `Promise`\<[`PulsePair`](../modules.md#pulsepair)\>

Fetch the a pulse and its predecessor by index or CID

#### Parameters

| Name | Type |
| :------ | :------ |
| `indexOrCid?` | `number` \| `IntoCid` |

#### Returns

`Promise`\<[`PulsePair`](../modules.md#pulsepair)\>

#### Defined in

[src/client.ts:121](https://github.com/buff-beacon-project/curby-js-client/blob/fd01cad/src/client.ts#L121)

___

### latest

▸ **latest**(): `Promise`\<`undefined` \| [`RandomnessRound`](../modules.md#randomnessround)\>

Get the latest round data

#### Returns

`Promise`\<`undefined` \| [`RandomnessRound`](../modules.md#randomnessround)\>

#### Defined in

[src/client.ts:174](https://github.com/buff-beacon-project/curby-js-client/blob/fd01cad/src/client.ts#L174)

___

### pair

▸ **pair**(): `Promise`\<[`LatestPulsePair`](../modules.md#latestpulsepair)\>

Get the latest and previous pulse

#### Returns

`Promise`\<[`LatestPulsePair`](../modules.md#latestpulsepair)\>

#### Defined in

[src/client.ts:190](https://github.com/buff-beacon-project/curby-js-client/blob/fd01cad/src/client.ts#L190)

___

### prev

▸ **prev**(): `Promise`\<`undefined` \| ``null`` \| `Pulse`\>

Get the previous pulse

#### Returns

`Promise`\<`undefined` \| ``null`` \| `Pulse`\>

#### Defined in

[src/client.ts:182](https://github.com/buff-beacon-project/curby-js-client/blob/fd01cad/src/client.ts#L182)

___

### randomness

▸ **randomness**(): `Promise`\<`undefined` \| ``null`` \| [`ByteHelper`](../modules.md#bytehelper)\>

Get the latest randomness

#### Returns

`Promise`\<`undefined` \| ``null`` \| [`ByteHelper`](../modules.md#bytehelper)\>

#### Defined in

[src/client.ts:166](https://github.com/buff-beacon-project/curby-js-client/blob/fd01cad/src/client.ts#L166)

___

### refresh

▸ **refresh**(): `Promise`\<`undefined` \| [`RandomnessRound`](../modules.md#randomnessround)\>

Refresh the internal state of the client

#### Returns

`Promise`\<`undefined` \| [`RandomnessRound`](../modules.md#randomnessround)\>

#### Defined in

[src/client.ts:144](https://github.com/buff-beacon-project/curby-js-client/blob/fd01cad/src/client.ts#L144)

___

### waitForNext

▸ **waitForNext**(`«destructured»?`): `Promise`\<`undefined` \| [`RandomnessRound`](../modules.md#randomnessround)\>

Wait for the next pulse

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | [`WaitOptions`](../modules.md#waitoptions) |

#### Returns

`Promise`\<`undefined` \| [`RandomnessRound`](../modules.md#randomnessround)\>

#### Defined in

[src/client.ts:201](https://github.com/buff-beacon-project/curby-js-client/blob/fd01cad/src/client.ts#L201)

___

### watch

▸ **watch**(`options?`): `AsyncGenerator`\<`undefined` \| [`RandomnessRound`](../modules.md#randomnessround), `void`, `unknown`\>

Poll for the latest randomness

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `options?` | [`WaitOptions`](../modules.md#waitoptions) | The options for waiting |

#### Returns

`AsyncGenerator`\<`undefined` \| [`RandomnessRound`](../modules.md#randomnessround), `void`, `unknown`\>

**`Example`**

```ts
const client = Client.create()
for await (const round of client.watch()){
  console.log(round.randomness)
}
```

#### Defined in

[src/client.ts:238](https://github.com/buff-beacon-project/curby-js-client/blob/fd01cad/src/client.ts#L238)

___

### create

▸ **create**(`options?`): [`Client`](Client.md)

Create a new client

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `options?` | [`ClientOptions`](../modules.md#clientoptions) | The options for the client |

#### Returns

[`Client`](Client.md)

#### Defined in

[src/client.ts:105](https://github.com/buff-beacon-project/curby-js-client/blob/fd01cad/src/client.ts#L105)
