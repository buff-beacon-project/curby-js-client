[**@buff-beacon-project/curby-client**](../index.md) • **Docs**

***

[@buff-beacon-project/curby-client](../index.md) / getPrecommitmentValue

# Function: getPrecommitmentValue()

> **getPrecommitmentValue**(`salt`, `previous`, `hasher`): `Promise`\<`Digest`\<`20`, `number`\>\>

Get the precommitment value for a pulse

## Parameters

• **salt**: `Uint8Array`

• **previous**: `Pulse`

• **hasher**: `Hasher`\<`"sha3-512"`, `20`\> = `sha3512`

## Returns

`Promise`\<`Digest`\<`20`, `number`\>\>

## Defined in

[src/extract-randomness.ts:73](https://github.com/buff-beacon-project/curby-js-client/blob/e85b824d126d92d22842a10bef1c81bb4fdd007c/src/extract-randomness.ts#L73)
