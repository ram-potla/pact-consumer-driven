require('dotenv').config()
const request = require('supertest')
const provider = require('../expectation/provider')
const interactions = require('../expectation/interactions')

const serverAddress = `http://localhost:${process.env.CLIENT_PORT}`
const baseUrl = '/engineers'
const consumerClient = request(`${serverAddress}`)

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
    const res = await consumerClient
      .get(`${baseUrl}/getengineer`)
      .set('Content-Type', 'application/json; charset=utf-8')
    expect(JSON.parse(res.text)).toEqual([
      {
        name: 'Ram',
        practice: 'Test',
        id: '5e7d3b15f54ff15a30d98503'
      }
    ])
  })
  test('post a engineer', async () => {
    await provider.addInteraction(interactions.createEngineer)
    const payload = {
      name: 'New Engineer',
      practice: 'Dev'
    }
    const res = await consumerClient
      .post(`${baseUrl}/addengineer`)
      .set('Content-Type', 'application/json; charset=utf-8')
      .send(payload)
      .expect(201)
    expect(JSON.parse(res.text)).toEqual({
      name: 'New Engineer',
      practice: 'Dev',
      id: '5e7d9d375c280c68668de229'
    })
  })
})
