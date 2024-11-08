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

[src/dirng.ts:359](https://github.com/buff-beacon-project/curby-js-client/blob/ce0e851c9bd9e50ac8f84d3519f029bd8ad289d0/src/dirng.ts#L359)
