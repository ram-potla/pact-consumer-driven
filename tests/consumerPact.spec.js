require('dotenv').config()
const request = require('supertest')
const provider = require('../consumer/expectation/provider')
const interactions = require('../consumer/expectation/interactions')

const serverAddress = `http://localhost:${process.env.CLIENT_PORT}`
const consumerClient = request(serverAddress)

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

    const res = await consumerClient.get('/engineers')
    // eslint-disable-next-line no-console
    console.log('actual res', res.text)
    expect(JSON.parse(res.text)).toEqual({
      name: 'Ram',
      practice: 'Test'
    })
    // return await provider.verify()
  })
})
