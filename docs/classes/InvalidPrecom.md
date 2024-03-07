[@buff-beacon-project/curby-client](../README.md) / [Exports](../modules.md) / InvalidPrecom

# Class: InvalidPrecom

An error for when a precommitment value is invalid

## Hierarchy

- `Error`

  ↳ **`InvalidPrecom`**

## Table of contents

### Constructors

- [constructor](InvalidPrecom.md#constructor)

### Properties

- [cause](InvalidPrecom.md#cause)
- [message](InvalidPrecom.md#message)
- [name](InvalidPrecom.md#name)
- [stack](InvalidPrecom.md#stack)
- [prepareStackTrace](InvalidPrecom.md#preparestacktrace)
- [stackTraceLimit](InvalidPrecom.md#stacktracelimit)

### Methods

- [captureStackTrace](InvalidPrecom.md#capturestacktrace)

## Constructors

### constructor

• **new InvalidPrecom**(`msg?`, `options?`): [`InvalidPrecom`](InvalidPrecom.md)

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `msg` | `string` | `'Invalid Precommitment Value'` |
| `options` | `any` | `{}` |

#### Returns

[`InvalidPrecom`](InvalidPrecom.md)

#### Overrides

Error.constructor

#### Defined in

[src/extract-randomness.ts:13](https://github.com/buff-beacon-project/curby-js-client/blob/6a4bdf0/src/extract-randomness.ts#L13)

## Properties

### cause

• `Optional` **cause**: `unknown`

#### Inherited from

Error.cause

#### Defined in

node_modules/typescript/lib/lib.es2022.error.d.ts:24

___

### message

• **message**: `string`

#### Inherited from

Error.message

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:1068

___

### name

• **name**: `string`

#### Inherited from

Error.name

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:1067

___

### stack

• `Optional` **stack**: `string`

#### Inherited from

Error.stack

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:1069

___

### prepareStackTrace

▪ `Static` `Optional` **prepareStackTrace**: (`err`: `Error`, `stackTraces`: `CallSite`[]) => `any`

Optional override for formatting stack traces

**`See`**

https://v8.dev/docs/stack-trace-api#customizing-stack-traces

#### Type declaration

▸ (`err`, `stackTraces`): `any`

##### Parameters

| Name | Type |
| :------ | :------ |
| `err` | `Error` |
| `stackTraces` | `CallSite`[] |

##### Returns

`any`

#### Inherited from

Error.prepareStackTrace

#### Defined in

node_modules/bun-types/types.d.ts:13441

___

### stackTraceLimit

▪ `Static` **stackTraceLimit**: `number`

#### Inherited from

Error.stackTraceLimit

#### Defined in

node_modules/bun-types/types.d.ts:13445

## Methods

### captureStackTrace

▸ **captureStackTrace**(`targetObject`, `constructorOpt?`): `void`

Create .stack property on a target object

#### Parameters

| Name | Type |
| :------ | :------ |
| `targetObject` | `object` |
| `constructorOpt?` | `Function` |

#### Returns

`void`

#### Inherited from

Error.captureStackTrace

#### Defined in

node_modules/bun-types/types.d.ts:13434
