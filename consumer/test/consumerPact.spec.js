require('dotenv').config()
const request = require('supertest')
const provider = require('../expectation/provider')
const interactions = require('../expectation/interactions')

const serverAddress = `http://localhost:${process.env.CLIENT_PORT}`
const baseUrl = '/engineers'
const consumerClient = request(`${serverAddress}${baseUrl}`)

describe('api testing', () => {
  jest.setTimeout(60000)
  beforeAll(async () => {
    await provider.setup()
  })

  afterAll(async () => {
    await provider.finalize()
  })

  afterEach(async () => {
    await provider.verify()
  })

  test('get all engineers', async () => {
    await provider.addInteraction(interactions.getEngineersList)
    const res = await consumerClient.get('/getengineer')
    expect(JSON.parse(res.text)).toEqual([
      {
        name: 'Ram',
        practice: 'Test',
        id: '5e7d3b15f54ff15a30d98503'
      }
    ])
  })
})
