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

[src/dirng.ts:331](https://github.com/buff-beacon-project/curby-js-client/blob/d961ea8fc79685bb955a01063f4c2d40db48941d/src/dirng.ts#L331)
