import jsSHA from 'jssha'

const hasher = (algorithm: any) => async (
  iterable: Iterable<Uint8Array> | AsyncIterable<Uint8Array>,
  outputFormat: 'UINT8ARRAY' | 'HEX' | 'B64' | 'ARRAYBUFFER' = 'UINT8ARRAY',
  options?: any
) : Promise<Uint8Array> => {
  const sha = new jsSHA(algorithm, 'UINT8ARRAY', options)
  for await (const chunk of iterable){
    sha.update(chunk)
  }
  // @ts-ignore
  return sha.getHash(outputFormat, options)
}

export const shake256 = hasher('SHAKE256')
export const sha3512 = hasher('SHA3-512')
