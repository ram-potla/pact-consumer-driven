'use strict'
require('dotenv').config()
const MongoClient = require('mongodb').MongoClient
// const url = 'ddmongodb://127.0.0.1:27017/engineer'
const url = process.env.MONGO_DB_URL

async function connect() {
  const dbclient = await MongoClient.connect(url, { poolSize: 2 })
  return dbclient.db('engineer').collection('engineers')
}

async function deleteAllCollections() {
  const engineerColl = await connect()
  return engineerColl.deleteMany({})
}

async function insertDocument(doc) {
  const engineerColl = await connect()
  return engineerColl.insert(doc)
}

module.exports = {
  deleteAllCollections,
  insertDocument
}
