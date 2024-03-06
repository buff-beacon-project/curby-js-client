import { expect, test } from 'bun:test'
import { DIRNGClient } from './dirng'

test('dirng client get round', async () => {
  const client = DIRNGClient.create({ url: 'http://localhost:3000', validateSeed: true })
  const round = await client.latest()
  expect(round).toBeDefined()
  expect(round.validations.bellResponse).toBeDefined()
  expect(round.validations.seedOrdering).toBeDefined()
})

test('shuffle array', async () => {
  const client = DIRNGClient.create({ url: 'http://localhost:3000', validateSeed: true })
  const randomness = await client.randomness()
  const array = [1, 2, 3, 4, 5]
  const shuffled = randomness.shuffled(array)
  expect(shuffled).not.toEqual(array)
})