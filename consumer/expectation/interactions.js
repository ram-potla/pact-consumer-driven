'use strict'
const { somethingLike: like, eachLike, term } = require('pact').Matchers
const baseUrl = '/engineers'
const ENGINEERS_BODY = [
  {
    name: 'Ram',
    practice: 'Test',
    id: '5e7d3b15f54ff15a30d98503'
  }
]

module.exports = {
  getEngineersList: {
    state: 'engineers list',
    uponReceiving: 'a request to retrieve engineers list',
    withRequest: {
      method: 'GET',
      path: `${baseUrl}/getengineer`
    },
    willRespondWith: {
      status: 200,
      body: ENGINEERS_BODY
    }
  }
}
