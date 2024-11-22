[**@buff-beacon-project/curby-client**](../index.md) • **Docs**

***

[@buff-beacon-project/curby-client](../index.md) / RoundData

# Type Alias: RoundData

> **RoundData**: `object`

A DIRNG round's data

## Type declaration

### chain

> **chain**: `Chain`

The chain

### error

> **error**: `Error` \| `null`

Error for the round (if present)

### isComplete

> **isComplete**: `boolean`

Whether the round is complete

### isOk

> **isOk**: `boolean`

Whether the round succeeded and is valid based on the validations present

### pulses

> **pulses**: `object`

The pulses for the round

### pulses.error

> **error**: `Pulse` \| `null`

The error pulse

### pulses.precommit

> **precommit**: `Pulse` \| `null`

The precommit pulse

### pulses.request

> **request**: `Pulse`

The request pulse

### pulses.result

> **result**: `Pulse` \| `null`

The result (randomness) pulse

### randomness

> **randomness**: [`ByteHelper`](ByteHelper.md) \| `null`

The randomness for the round

### round

> **round**: `number`

The round number

### stage

> **stage**: `string`

The stage of the round

### validations

> **validations**: [`RoundValidations`](RoundValidations.md)

The validations for the round (if present)

## Defined in

[src/dirng.ts:61](https://github.com/buff-beacon-project/curby-js-client/blob/ab22d721ec98514e549c65f2310e066d4022d353/src/dirng.ts#L61)
