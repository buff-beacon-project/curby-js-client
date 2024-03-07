/**
 * The base URL for the CURBy API
 */
export const CURBY_API_URL = 'https://api.entwine.me'

/**
 * The options for waiting
 * @see {@link Client.waitForNext}
 */
export type WaitOptions = {
  /**
   * An optional abort signal
   */
  signal?: AbortSignal,
  /**
   * The maximum time to wait
   */
  timeout?: number,
}