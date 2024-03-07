import { expect, test } from 'bun:test'
import { Client } from './client'

test('curby client', async () => {
  const client = Client.create({ url: 'http://localhost:3000' })
  const randomness = await client.randomness()
  expect(randomness).toBeDefined()
})

test('shuffle array', async () => {
  const client = Client.create({ url: 'http://localhost:3000' })
  const randomness = await client.randomness()
  const array = [1, 2, 3, 4, 5]
  const shuffled = randomness?.shuffled(array)
  expect(shuffled).not.toEqual(array)
})

test('list of 8 bit numbers', async () => {
  const client = Client.create({ url: 'http://localhost:3000' })
  const randomness = await client.randomness()
  const numbers = randomness?.bits(8)
  expect(numbers).toBeDefined()
  expect(Array.from(numbers!)).toHaveLength(512 / 8)
  expect(Array.from(numbers!).every((n) => n >= 0 && n < 256)).toBe(true)
})
