'use strict'
const { somethingLike: like, eachLike, term } = require('pact').Matchers

const ENGINEERS_BODY = {
  name: 'Ram',
  practice: 'Test'
}

module.exports = {
  getEngineersList: {
    state: 'engineers list',
    uponReceiving: 'a request to retrieve engineers list',
    withRequest: {
      method: 'GET',
      path: '/engineers'
    },
    willRespondWith: {
      status: 200,
      body: ENGINEERS_BODY
    }
  }
}
