const mongoose = require('mongoose')
require('dotenv').config()

const options = {
  useNewUrlParser: true,
  reconnectTries: Number.MAX_VALUE,
  reconnectInterval: 500,
  connectTimeoutMS: 10000
}
const url = process.env.MONGO_DB_URL
function connect(url) {
  return mongoose.connect(url, options).then(client => client.connect)
}

function execute(query) {
  dbs.exe
}
module.exports = async () => {
  let dbs = await connect(url)
  return dbs
}
