const path = require('path')
const Engineer = require('../models/engineers')

exports.create = async (req, res) => {
  var newEngineer = new Engineer(req.body)
  console.log(req.body)
  try {
    const engineerPost = await newEngineer.save()
    console.log(engineerPost)
    res.json(engineerPost)
  } catch (err) {
    res.json({ message: err })
  }
}

exports.list = async (req, res) => {
  try {
    const engineers = await Engineer.find({})
    res.json(engineers)
  } catch (err) {
    res.json({ message: err })
  }
}
