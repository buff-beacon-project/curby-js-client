import jsSHA from 'jssha';

type OutputFormat = 'UINT8ARRAY' | 'HEX' | 'B64' | 'ARRAYBUFFER';

function hasher(algorithm: any): {
  (iterable: Iterable<Uint8Array> | AsyncIterable<Uint8Array>, outputFormat: 'UINT8ARRAY', options?: any): Promise<Uint8Array>;
  (iterable: Iterable<Uint8Array> | AsyncIterable<Uint8Array>, outputFormat: 'HEX' | 'B64', options?: any): Promise<string>;
  (iterable: Iterable<Uint8Array> | AsyncIterable<Uint8Array>, outputFormat: 'ARRAYBUFFER', options?: any): Promise<ArrayBuffer>;
} {
  return async (
    iterable: Iterable<Uint8Array> | AsyncIterable<Uint8Array>,
    outputFormat: OutputFormat = 'UINT8ARRAY',
    options?: any
  ): Promise<any> => {
    const sha = new jsSHA(algorithm, 'UINT8ARRAY', options);
    for await (const chunk of iterable) {
      sha.update(chunk);
    }
    // @ts-ignore
    return sha.getHash(outputFormat, options);
  };
}

/**
 * @ignore
 */
export const shake256 = hasher('SHAKE256');
/**
 * @ignore
 */
export const sha3512 = hasher('SHA3-512');
