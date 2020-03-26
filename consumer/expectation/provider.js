'use strict'
require('dotenv').config
const path = require('path')
const { Pact } = require('@pact-foundation/pact')
const opts = {
  consumer: 'Client',
  provider: 'EngineerService',
  port: parseInt(process.env.CLIENT_PORT),
  log: path.resolve(__dirname, '../../logs'),
  loglevel: 'ERROR',
  dir: path.resolve(__dirname, '../pacts'),
  spec: 2
}

const provider = new Pact(opts)
module.exports = provider
