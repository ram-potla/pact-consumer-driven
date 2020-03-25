const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Engineer = new Schema({
  name: { type: String, required: true },
  practice: { type: String, required: true }
})

module.exports = mongoose.model('Engineer', Engineer)
