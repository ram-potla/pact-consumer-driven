'use strict'
const { Matchers } = require('@pact-foundation/pact')
const { eachLike, like, term, hexadecimal } = Matchers
const baseUrl = '/engineers'
const ENGINEERS_GET_BODY = [
  {
    name: like('Ram'),
    practice: like('Test'),
    id: hexadecimal('5e8280694c55aa3b3263fe9a')
  }
]

const ENGINEER_POST_PAYLOAD = {
  name: 'New Engineer',
  practice: 'Dev'
}
const ENGINEER_RES_PAYLOAD = {
  name: like('New Engineer'),
  practice: like('Dev'),
  id: hexadecimal('5e82a81d8ffec3918330b305')
}

module.exports = {
  getEngineersList: {
    state: 'engineers list',
    uponReceiving: 'a request to retrieve engineers list',
    withRequest: {
      method: 'GET',
      path: `${baseUrl}`,
      headers: {
        'Content-Type': 'application/json; charset=utf-8'
      }
    },
    willRespondWith: {
      status: 200,
      body: ENGINEERS_GET_BODY,
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
      path: `${baseUrl}`,
      headers: {
        'Content-Type': 'application/json; charset=utf-8'
      },
      body: ENGINEER_POST_PAYLOAD
    },
    willRespondWith: {
      status: 201,
      body: ENGINEER_RES_PAYLOAD,
      headers: {
        'Content-Type': 'application/json; charset=utf-8'
      }
    }
  }
}
