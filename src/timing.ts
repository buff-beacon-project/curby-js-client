import { Pulse, isPulse } from '@twine-protocol/twine-core'

const PULSE_INTERVAL = 60000

/**
 * Time until next rng pulse in milliseconds
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