'use strict'
require('dotenv').config
const { Verifier } = require('@pact-foundation/pact')
const path = require('path')
const app = require('../../app')
const server = require('../../server.js')
describe('Pact Verification', () => {
  beforeAll(async () => {})

  afterAll(async () => {
    console.log('hi server')
    server.close()
    app.close()
  })

  it('validates the expectations of EngineerService', async () => {
    let opts = {
      logLevel: 'INFO',
      providerBaseUrl: 'http://localhost:5000/engineers',
      provider: 'EngineerService',
      providerVersion: '1.0.0',
      pactUrls: [
        path.resolve(__dirname, '../pacts/client-engineerservice.json')
      ]
    }

    await new Verifier(opts).verifyProvider().finally(() => {
      console.log('done')
    })
  })
})
