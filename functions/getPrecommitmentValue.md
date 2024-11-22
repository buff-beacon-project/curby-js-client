[**@buff-beacon-project/curby-client**](../index.md) • **Docs**

***

[@buff-beacon-project/curby-client](../index.md) / getPrecommitmentValue

# Function: getPrecommitmentValue()

> **getPrecommitmentValue**(`salt`, `previous`, `hasher`): `Promise`\<`Digest`\<`20`, `number`\>\>

Get the precommitment value for a pulse

## Parameters

| Parameter | Type | Default value |
| ------ | ------ | ------ |
| `salt` | `Uint8Array` | `undefined` |
| `previous` | `Pulse` | `undefined` |
| `hasher` | `Hasher`\<`"sha3-512"`, `20`\> | `sha3512` |

## Returns

`Promise`\<`Digest`\<`20`, `number`\>\>

## Defined in

[src/extract-randomness.ts:73](https://github.com/buff-beacon-project/curby-js-client/blob/95397f5e9fcc8ad57ef410c54473862e0b83bc59/src/extract-randomness.ts#L73)
