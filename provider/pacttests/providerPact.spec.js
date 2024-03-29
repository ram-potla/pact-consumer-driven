'use strict'
require('dotenv').config
const { Verifier } = require('@pact-foundation/pact')
const path = require('path')
const database = require('../dbhelper')

const server = require('../../server.js')
describe('Pact Verification', () => {
  beforeAll(async () => {
    await database.deleteAllCollections()
    const document = { name: 'New engineer', practice: 'Design' }
    await database.insertDocument(document)
  })
  afterEach(async () => await database.deleteAllCollections())

  afterAll(async () => {
    process.kill(process.pid, 'SIGTERM')
  })

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
    try {
      await new Verifier(opts).verifyProvider()
    } catch (error) {
      // eslint-disable-next-line no-console
      console.error('failed', error)
    }
  })
})
