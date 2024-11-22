[**@buff-beacon-project/curby-client**](../index.md) • **Docs**

***

[@buff-beacon-project/curby-client](../index.md) / DIRNGClientOptions

# Type Alias: DIRNGClientOptions

> **DIRNGClientOptions**: `object`

The options for the DIRNG client

## Type declaration

### fetchOptions?

> `optional` **fetchOptions**: `FetchOptions`

The underlying fetch options

#### See

[https://github.com/kwhitley/itty-fetcher](https://github.com/kwhitley/itty-fetcher)

### url?

> `optional` **url**: `string`

Alternate URL for the CURBy API

### validateSeed?

> `optional` **validateSeed**: `boolean`

Whether to validate the seed value (default: false). Requires fetching the parameters for each round

## Defined in

[src/dirng.ts:359](https://github.com/buff-beacon-project/curby-js-client/blob/ab22d721ec98514e549c65f2310e066d4022d353/src/dirng.ts#L359)
