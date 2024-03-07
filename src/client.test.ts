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
