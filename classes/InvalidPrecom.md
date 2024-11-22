[**@buff-beacon-project/curby-client**](../index.md) • **Docs**

***

[@buff-beacon-project/curby-client](../index.md) / InvalidPrecom

# Class: InvalidPrecom

An error for when a precommitment value is invalid

## Extends

- `Error`

## Constructors

### new InvalidPrecom()

> **new InvalidPrecom**(`msg`, `options`): [`InvalidPrecom`](InvalidPrecom.md)

#### Parameters

| Parameter | Type | Default value |
| ------ | ------ | ------ |
| `msg` | `string` | `'Invalid Precommitment Value'` |
| `options` | `any` | `{}` |

#### Returns

[`InvalidPrecom`](InvalidPrecom.md)

#### Overrides

`Error.constructor`

#### Defined in

[src/extract-randomness.ts:13](https://github.com/buff-beacon-project/curby-js-client/blob/95397f5e9fcc8ad57ef410c54473862e0b83bc59/src/extract-randomness.ts#L13)

## Properties

| Property | Modifier | Type | Description | Inherited from | Defined in |
| ------ | ------ | ------ | ------ | ------ | ------ |
| `cause?` | `public` | `unknown` | - | `Error.cause` | node\_modules/typescript/lib/lib.es2022.error.d.ts:24 |
| `message` | `public` | `string` | - | `Error.message` | node\_modules/typescript/lib/lib.es5.d.ts:1077 |
| `name` | `public` | `string` | - | `Error.name` | node\_modules/typescript/lib/lib.es5.d.ts:1076 |
| `stack?` | `public` | `string` | - | `Error.stack` | node\_modules/typescript/lib/lib.es5.d.ts:1078 |
| `prepareStackTrace?` | `static` | (`err`: `Error`, `stackTraces`: `CallSite`[]) => `any` | Optional override for formatting stack traces **See** https://v8.dev/docs/stack-trace-api#customizing-stack-traces | `Error.prepareStackTrace` | node\_modules/@types/node/globals.d.ts:28 |
| `stackTraceLimit` | `static` | `number` | - | `Error.stackTraceLimit` | node\_modules/@types/node/globals.d.ts:30 |

## Methods

### captureStackTrace()

#### captureStackTrace(targetObject, constructorOpt)

> `static` **captureStackTrace**(`targetObject`, `constructorOpt`?): `void`

Create .stack property on a target object

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `targetObject` | `object` |
| `constructorOpt`? | `Function` |

##### Returns

`void`

##### Inherited from

`Error.captureStackTrace`

##### Defined in

node\_modules/@types/node/globals.d.ts:21

#### captureStackTrace(targetObject, constructorOpt)

> `static` **captureStackTrace**(`targetObject`, `constructorOpt`?): `void`

Create .stack property on a target object

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `targetObject` | `object` |
| `constructorOpt`? | `Function` |

##### Returns

`void`

##### Inherited from

`Error.captureStackTrace`

##### Defined in

node\_modules/bun-types/globals.d.ts:1630
