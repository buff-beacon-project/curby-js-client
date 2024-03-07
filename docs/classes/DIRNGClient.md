[@buff-beacon-project/curby-client](../README.md) / [Exports](../modules.md) / DIRNGClient

# Class: DIRNGClient

A client for the Device Independent Randomness Generation (DIRNG) chain

**`Example`**

```ts
import { DIRNGClient } from '@buff-beacon-project/curby-client'

const client = DIRNGClient.create()
const randomness = await client.randomness()
console.log(randomness)
```

## Table of contents

### Constructors

- [constructor](DIRNGClient.md#constructor)

### Methods

- [fetchRound](DIRNGClient.md#fetchround)
- [fetchRoundData](DIRNGClient.md#fetchrounddata)
- [fetchRoundParams](DIRNGClient.md#fetchroundparams)
- [latest](DIRNGClient.md#latest)
- [randomness](DIRNGClient.md#randomness)
- [refresh](DIRNGClient.md#refresh)
- [waitForNext](DIRNGClient.md#waitfornext)
- [watch](DIRNGClient.md#watch)
- [create](DIRNGClient.md#create)

## Constructors

### constructor

• **new DIRNGClient**(`options?`): [`DIRNGClient`](DIRNGClient.md)

Create a new client

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `options?` | [`DIRNGClientOptions`](../modules.md#dirngclientoptions) | The options for the client |

#### Returns

[`DIRNGClient`](DIRNGClient.md)

#### Defined in

[src/dirng.ts:356](https://github.com/buff-beacon-project/curby-js-client/blob/b8d739f/src/dirng.ts#L356)

## Methods

### fetchRound

▸ **fetchRound**(`round?`): `Promise`\<[`RoundData`](../modules.md#rounddata)\>

Fetch and validate the round data for a round

#### Parameters

| Name | Type |
| :------ | :------ |
| `round?` | `number` \| ``"latest"`` \| ``"pending"`` |

#### Returns

`Promise`\<[`RoundData`](../modules.md#rounddata)\>

#### Defined in

[src/dirng.ts:416](https://github.com/buff-beacon-project/curby-js-client/blob/b8d739f/src/dirng.ts#L416)

___

### fetchRoundData

▸ **fetchRoundData**(`round`): `Promise`\<`string`\>

Fetch the raw bell data for a round

Will validate the hash of the data

#### Parameters

| Name | Type |
| :------ | :------ |
| `round` | [`RoundData`](../modules.md#rounddata) |

#### Returns

`Promise`\<`string`\>

#### Defined in

[src/dirng.ts:395](https://github.com/buff-beacon-project/curby-js-client/blob/b8d739f/src/dirng.ts#L395)

___

### fetchRoundParams

▸ **fetchRoundParams**(`round`): `Promise`\<`any`\>

Fetch the parameters for a round

Will validate the hash of the parameters

#### Parameters

| Name | Type |
| :------ | :------ |
| `round` | [`RoundData`](../modules.md#rounddata) |

#### Returns

`Promise`\<`any`\>

#### Defined in

[src/dirng.ts:371](https://github.com/buff-beacon-project/curby-js-client/blob/b8d739f/src/dirng.ts#L371)

___

### latest

▸ **latest**(): `Promise`\<[`RoundData`](../modules.md#rounddata)\>

Get the latest round data

#### Returns

`Promise`\<[`RoundData`](../modules.md#rounddata)\>

#### Defined in

[src/dirng.ts:463](https://github.com/buff-beacon-project/curby-js-client/blob/b8d739f/src/dirng.ts#L463)

___

### randomness

▸ **randomness**(): `Promise`\<[`ByteHelper`](../modules.md#bytehelper)\>

Get the latest randomness

#### Returns

`Promise`\<[`ByteHelper`](../modules.md#bytehelper)\>

#### Defined in

[src/dirng.ts:455](https://github.com/buff-beacon-project/curby-js-client/blob/b8d739f/src/dirng.ts#L455)

___

### refresh

▸ **refresh**(): `Promise`\<`void`\>

Refresh the internal state of the client

#### Returns

`Promise`\<`void`\>

#### Defined in

[src/dirng.ts:442](https://github.com/buff-beacon-project/curby-js-client/blob/b8d739f/src/dirng.ts#L442)

___

### waitForNext

▸ **waitForNext**(`«destructured»?`): `Promise`\<`undefined` \| [`RoundData`](../modules.md#rounddata)\>

Wait for the next round

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | [`WaitOptions`](../modules.md#waitoptions) |

#### Returns

`Promise`\<`undefined` \| [`RoundData`](../modules.md#rounddata)\>

#### Defined in

[src/dirng.ts:471](https://github.com/buff-beacon-project/curby-js-client/blob/b8d739f/src/dirng.ts#L471)

___

### watch

▸ **watch**(`options?`): `AsyncGenerator`\<[`RoundData`](../modules.md#rounddata), `void`, `unknown`\>

Watch for new rounds

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `options?` | [`WaitOptions`](../modules.md#waitoptions) | The options for waiting |

#### Returns

`AsyncGenerator`\<[`RoundData`](../modules.md#rounddata), `void`, `unknown`\>

**`Example`**

```ts
const client = DIRNGClient.create()
for await (const round of client.watch()){
  console.log(round)
}

#### Defined in

[src/dirng.ts:508](https://github.com/buff-beacon-project/curby-js-client/blob/b8d739f/src/dirng.ts#L508)

___

### create

▸ **create**(`options?`): [`DIRNGClient`](DIRNGClient.md)

Create a new client

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | [`DIRNGClientOptions`](../modules.md#dirngclientoptions) |

#### Returns

[`DIRNGClient`](DIRNGClient.md)

#### Defined in

[src/dirng.ts:348](https://github.com/buff-beacon-project/curby-js-client/blob/b8d739f/src/dirng.ts#L348)
