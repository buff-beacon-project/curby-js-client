[**@buff-beacon-project/curby-client**](../index.md) • **Docs**

***

[@buff-beacon-project/curby-client](../index.md) / wait

# Function: wait()

> **wait**(`dt`, `signal`?): `Promise`\<`unknown`\>

Wait a specified number of milliseconds

## Parameters

• **dt**: `number`

The number of milliseconds to wait

• **signal?**: `AbortSignal`

An optional abort signal

## Returns

`Promise`\<`unknown`\>

A promise that resolves after the specified time

## Throws

If the signal is aborted

## Example

```ts
await wait(1000)
console.log('One second has passed')
```

## Defined in

[src/timing.ts:44](https://github.com/buff-beacon-project/curby-js-client/blob/effd2d56c82ee5d2722332b349877f5127bbcc3f/src/timing.ts#L44)
