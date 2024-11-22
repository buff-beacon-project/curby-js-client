[**@buff-beacon-project/curby-client**](../index.md) • **Docs**

***

[@buff-beacon-project/curby-client](../index.md) / RoundData

# Type Alias: RoundData

> **RoundData**: `object`

A DIRNG round's data

## Type declaration

| Name | Type | Description | Defined in |
| ------ | ------ | ------ | ------ |
| `chain` | `Chain` | The chain | [src/dirng.ts:73](https://github.com/buff-beacon-project/curby-js-client/blob/95397f5e9fcc8ad57ef410c54473862e0b83bc59/src/dirng.ts#L73) |
| `error` | `Error` \| `null` | Error for the round (if present) | [src/dirng.ts:102](https://github.com/buff-beacon-project/curby-js-client/blob/95397f5e9fcc8ad57ef410c54473862e0b83bc59/src/dirng.ts#L102) |
| `isComplete` | `boolean` | Whether the round is complete | [src/dirng.ts:106](https://github.com/buff-beacon-project/curby-js-client/blob/95397f5e9fcc8ad57ef410c54473862e0b83bc59/src/dirng.ts#L106) |
| `isOk` | `boolean` | Whether the round succeeded and is valid based on the validations present | [src/dirng.ts:110](https://github.com/buff-beacon-project/curby-js-client/blob/95397f5e9fcc8ad57ef410c54473862e0b83bc59/src/dirng.ts#L110) |
| `pulses` | `object` | The pulses for the round | [src/dirng.ts:77](https://github.com/buff-beacon-project/curby-js-client/blob/95397f5e9fcc8ad57ef410c54473862e0b83bc59/src/dirng.ts#L77) |
| `pulses.error` | `Pulse` \| `null` | The error pulse | [src/dirng.ts:93](https://github.com/buff-beacon-project/curby-js-client/blob/95397f5e9fcc8ad57ef410c54473862e0b83bc59/src/dirng.ts#L93) |
| `pulses.precommit` | `Pulse` \| `null` | The precommit pulse | [src/dirng.ts:89](https://github.com/buff-beacon-project/curby-js-client/blob/95397f5e9fcc8ad57ef410c54473862e0b83bc59/src/dirng.ts#L89) |
| `pulses.request` | `Pulse` | The request pulse | [src/dirng.ts:85](https://github.com/buff-beacon-project/curby-js-client/blob/95397f5e9fcc8ad57ef410c54473862e0b83bc59/src/dirng.ts#L85) |
| `pulses.result` | `Pulse` \| `null` | The result (randomness) pulse | [src/dirng.ts:81](https://github.com/buff-beacon-project/curby-js-client/blob/95397f5e9fcc8ad57ef410c54473862e0b83bc59/src/dirng.ts#L81) |
| `randomness` | [`ByteHelper`](../interfaces/ByteHelper.md) \| `null` | The randomness for the round | [src/dirng.ts:69](https://github.com/buff-beacon-project/curby-js-client/blob/95397f5e9fcc8ad57ef410c54473862e0b83bc59/src/dirng.ts#L69) |
| `round` | `number` | The round number | [src/dirng.ts:65](https://github.com/buff-beacon-project/curby-js-client/blob/95397f5e9fcc8ad57ef410c54473862e0b83bc59/src/dirng.ts#L65) |
| `stage` | `string` | The stage of the round | [src/dirng.ts:114](https://github.com/buff-beacon-project/curby-js-client/blob/95397f5e9fcc8ad57ef410c54473862e0b83bc59/src/dirng.ts#L114) |
| `validations` | [`RoundValidations`](RoundValidations.md) | The validations for the round (if present) | [src/dirng.ts:98](https://github.com/buff-beacon-project/curby-js-client/blob/95397f5e9fcc8ad57ef410c54473862e0b83bc59/src/dirng.ts#L98) |

## Defined in

[src/dirng.ts:61](https://github.com/buff-beacon-project/curby-js-client/blob/95397f5e9fcc8ad57ef410c54473862e0b83bc59/src/dirng.ts#L61)
