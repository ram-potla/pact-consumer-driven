const Engineer = require('../models/engineers')

exports.create = async (req, res) => {
  var newEngineer = new Engineer(req.body)
  try {
    const engineerPost = await newEngineer.save()
    const obj = engineerPost._doc
    delete obj.__v
    obj.id = obj._id
    delete obj._id
    res.set('Content-Type', 'application/json; charset=utf-8')
    res.status(201)
    res.json(obj)
  } catch (err) {
    res.json({ message: err })
  }
}

exports.list = async (req, res) => {
  try {
    const engineers = await Engineer.find({})
    const updatedengineers = engineers.map(engineer => {
      const updatedengineer = engineer._doc
      delete updatedengineer.__v
      updatedengineer.id = engineer._id
      delete updatedengineer._id
      return updatedengineer
    })

    res.set('Content-Type', 'application/json; charset=utf-8')
    res.json(engineers).status(200)
  } catch (err) {
    res.json({ message: err })
  }
}
