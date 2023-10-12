import { PulseContent } from "@buff-beacon-project/twinejs"
import { Twine } from "@buff-beacon-project/twinejs/twine"

/**
 * Time until next pulse in milliseconds
 */
export const timeToNext = (obj: string | number | { timestamp: number } | Twine<PulseContent>) => {
  let timestamp: number
  if (typeof obj === 'string') {
    timestamp = Date.parse(obj)
  } else if (typeof obj === 'number') {
    timestamp = obj
  } else if (Twine.isTwine(obj)) {
    timestamp = obj.value.content.payload.timestamp
  } else {
    timestamp = obj.timestamp
  }
  const now = Date.now()
  return timestamp - now
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