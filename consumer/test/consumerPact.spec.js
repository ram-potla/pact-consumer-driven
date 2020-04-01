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
      .get(`${baseUrl}`)
      .set('Content-Type', 'application/json; charset=utf-8')
    expect(JSON.parse(res.text)).toEqual([
      {
        name: 'Ram',
        practice: 'Test',
        id: '5e8280694c55aa3b3263fe9a'
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
      .post(`${baseUrl}`)
      .set('Content-Type', 'application/json; charset=utf-8')
      .send(payload)
      .expect(201)
    expect(JSON.parse(res.text)).toEqual({
      name: 'New Engineer',
      practice: 'Dev',
      id: '5e82a81d8ffec3918330b305'
    })
  })
})
