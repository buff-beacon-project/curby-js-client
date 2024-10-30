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

• **msg**: `string` = `'Invalid Precommitment Value'`

• **options**: `any` = `{}`

#### Returns

[`InvalidPrecom`](InvalidPrecom.md)

#### Overrides

`Error.constructor`

#### Defined in

[src/extract-randomness.ts:13](https://github.com/buff-beacon-project/curby-js-client/blob/d961ea8fc79685bb955a01063f4c2d40db48941d/src/extract-randomness.ts#L13)

## Properties

### cause?

> `optional` **cause**: `unknown`

#### Inherited from

`Error.cause`

#### Defined in

node\_modules/typescript/lib/lib.es2022.error.d.ts:24

***

### message

> **message**: `string`

#### Inherited from

`Error.message`

#### Defined in

node\_modules/typescript/lib/lib.es5.d.ts:1077

***

### name

> **name**: `string`

#### Inherited from

`Error.name`

#### Defined in

node\_modules/typescript/lib/lib.es5.d.ts:1076

***

### stack?

> `optional` **stack**: `string`

#### Inherited from

`Error.stack`

#### Defined in

node\_modules/typescript/lib/lib.es5.d.ts:1078

***

### prepareStackTrace()?

> `static` `optional` **prepareStackTrace**: (`err`, `stackTraces`) => `any`

Optional override for formatting stack traces

#### Parameters

• **err**: `Error`

• **stackTraces**: `CallSite`[]

#### Returns

`any`

#### See

https://v8.dev/docs/stack-trace-api#customizing-stack-traces

#### Inherited from

`Error.prepareStackTrace`

#### Defined in

node\_modules/bun-types/types.d.ts:13441

***

### stackTraceLimit

> `static` **stackTraceLimit**: `number`

#### Inherited from

`Error.stackTraceLimit`

#### Defined in

node\_modules/bun-types/types.d.ts:13445

## Methods

### captureStackTrace()

> `static` **captureStackTrace**(`targetObject`, `constructorOpt`?): `void`

Create .stack property on a target object

#### Parameters

• **targetObject**: `object`

• **constructorOpt?**: `Function`

#### Returns

`void`

#### Inherited from

`Error.captureStackTrace`

#### Defined in

node\_modules/bun-types/types.d.ts:13434
