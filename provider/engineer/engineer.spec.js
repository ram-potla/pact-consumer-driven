// 'use strict'
// require('dotenv').config
// const { Verifier } = require('@pact-foundation/pact')
// const path = require('path')

// describe('Pact Verification', () => {
//   it('validates the expectations of EngineerService', () => {
//     let opts = {
//       logLevel: 'INFO',
//       providerBaseUrl: 'http://localhost:5000',
//       provider: 'EngineerService',
//       providerVersion: '1.0.0',
//       pactUrls: [
//         path.resolve(__dirname, '../pacts/client-engineerservice.json')
//       ]
//     }

//     return new Verifier(opts).verifyProvider().finally(() => {
//       // server.close()
//       // eslint-disable-next-line no-console
//       console.log('done...')
//     })
//   })
// })
