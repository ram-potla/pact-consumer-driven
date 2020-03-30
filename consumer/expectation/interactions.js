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

const ENGINEER_PAYLOAD = {
  name: 'New Engineer',
  practice: 'Dev',
  id: '5e7d9d375c280c68668de229'
}

module.exports = {
  getEngineersList: {
    state: 'engineers list',
    uponReceiving: 'a request to retrieve engineers list',
    withRequest: {
      method: 'GET',
      path: `${baseUrl}/getengineer`,
      headers: {
        'Content-Type': 'application/json; charset=utf-8'
      }
    },
    willRespondWith: {
      status: 200,
      body: ENGINEERS_BODY,
      headers: {
        'Content-Type': 'application/json; charset=utf-8'
      }
    }
  },
  createEngineer: {
    state: 'add a engineer',
    uponReceiving: 'a request to post a engineer',
    withRequest: {
      method: 'POST',
      path: `${baseUrl}/addengineer`,
      headers: {
        'Content-Type': 'application/json; charset=utf-8'
      }
    },
    willRespondWith: {
      status: 201,
      body: ENGINEER_PAYLOAD,
      headers: {
        'Content-Type': 'application/json; charset=utf-8'
      }
    }
  }
}
