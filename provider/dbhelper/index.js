'use strict'
const MongoClient = require('mongodb').MongoClient
require('dotenv').config
const url = 'ddmongodb://127.0.0.1:27017/engineer'
console.log('connection string' + url)

async function connect() {
  const dbclient = await MongoClient.connect(url, { poolSize: 2 })
  return dbclient.db('engineer').collection('engineers')
}

async function deleteAllCollection() {
  const engineerColl = await connect()
  return engineerColl.deleteMany({})
}

async function insertDocument(doc) {
  const engineerColl = await connect()
  return engineerColl.insert(doc)
}

module.exports = {
  deleteAllCollection,
  insertDocument
}
