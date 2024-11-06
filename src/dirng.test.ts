import { expect, test } from 'bun:test'
import { DIRNGClient } from './dirng'
import './test/mocks.js'

test('dirng client get round', async () => {
  const client = DIRNGClient.create({ validateSeed: true })
  const round = await client.latest()
  expect(round).toBeDefined()
  expect(round.isOk).toBe(true)
  expect(round.isComplete).toBe(true)
  expect(round.validations.bellResponse).toBeDefined()
  expect(round.validations.bellResponse?.data.pulse).toBeDefined()
  expect(round.validations.seedOrdering).toBeDefined()
  expect(round.validations.seedOrdering?.data.pulse).toBeDefined()
  expect(round.validations.seed).toBeDefined()
  expect(round.validations.seed?.data.bytes).toBeDefined()
  expect(round.validations.seed?.data.pulse).toBeDefined()
})

test('dirng client get pending round', async () => {
  const client = DIRNGClient.create({ validateSeed: true })
  const round = await client.fetchRound('pending')
  expect(round).toBeDefined()
})

test('shuffle array', async () => {
  const client = DIRNGClient.create({ validateSeed: true })
  const randomness = await client.randomness()
  const array = [1, 2, 3, 4, 5]
  const shuffled = randomness.shuffled(array)
  expect(shuffled).not.toEqual(array)
})
