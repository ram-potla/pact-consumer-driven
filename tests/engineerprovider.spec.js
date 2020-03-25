'use strict'
require('dotenv').config
const { Verifier } = require('@pact-foundation/pact')
const path = require('path')
require('../server')

describe('Pact Verification', () => {
  it('validates the expectations of EngineerService', async () => {
    let opts = {
      logLevel: 'INFO',
      providerBaseUrl: 'http://localhost:5000',
      providerStatesSetup: 'http://localhost:5000/engineers/getengineer',
      provider: 'EngineerService',
      providerVersion: '1.0.0',
      pactUrls: [
        path.resolve(__dirname, '../pacts/client-engineerservice.json')
      ]
    }

    // return new Verifier(opts).verifyProvider().finally(() => {
    //   // server.close()
    //   // eslint-disable-next-line no-console
    //   console.log('done...')
    // })
    await new Verifier(opts).verifyProvider().finally(() => {
      // process.exit()
      console.log('done')
    })
  })
})
