import { Pulse, isPulse } from '@twine-protocol/twine-core'

const PULSE_INTERVAL = 60000

/**
 * Time until next rng pulse in milliseconds
 *
 * @param obj - A timestamp, pulse, or object with a timestamp property
 * @returns Time until next pulse in milliseconds
 */
export const timeToNext = (obj?: string | number | { timestamp: number } | Pulse | null) => {
  if (!obj) { return -1 }
  let timestamp: number
  if (typeof obj === 'string') {
    timestamp = Date.parse(obj)
  } else if (typeof obj === 'number') {
    timestamp = obj
  } else if (isPulse(obj)) {
    timestamp = Date.parse(obj.value.content.payload.timestamp)
  } else if (typeof obj === 'object' && obj.timestamp) {
    timestamp = obj.timestamp
  } else {
    return -1
  }
  const now = Date.now()
  return timestamp + PULSE_INTERVAL - now
}

/**
 * Wait a specified number of milliseconds
 *
 * @param dt - The number of milliseconds to wait
 * @param signal - An optional abort signal
 * @returns A promise that resolves after the specified time
 * @throws If the signal is aborted
 * @example
 * ```ts
 * await wait(1000)
 * console.log('One second has passed')
 * ```
 */
export async function wait(dt: number, signal?: AbortSignal) {
  if (dt <= 0) return
  if (signal?.aborted) return
  return new Promise((resolve, reject) => {
    const timeout = setTimeout(resolve, dt)
    if (signal) {
      signal.addEventListener('abort', () => {
        clearTimeout(timeout)
        reject(new Error('Aborted'))
      })
    }
  })
}