'use strict'
require('dotenv').config
const { Verifier } = require('@pact-foundation/pact')
const path = require('path')
const database = require('../dbhelper')

require('../../server.js')
describe('Pact Verification', () => {
  beforeAll(async () => {
    await database.deleteAllCollection()
    const document = { name: 'Ram', practice: 'Test' }
    await database.insertDocument(document)
  })
  afterEach(async () => await database.deleteAllCollection())

  afterAll(async () => {})

  it('validates the expectations of EngineerService', async () => {
    let opts = {
      logLevel: 'INFO',
      providerBaseUrl: 'http://localhost:5000',
      provider: 'EngineerService',
      providerVersion: '1.0.0',
      pactUrls: [
        path.resolve(__dirname, '../pacts/client-engineerservice.json')
      ]
    }

    await new Verifier(opts).verifyProvider().finally(() => {
      // eslint-disable-next-line no-console
      console.log('done')
    })
  })
})
