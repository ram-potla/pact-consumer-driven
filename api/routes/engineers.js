const express = require('express')
const router = express.Router()
const engineer = require('../../controllers/engineers')

router.post('/', async (req, res) => {
  await engineer.create(req, res)
})

router.get('/', async (req, res) => {
  await engineer.list(req, res)
})

module.exports = router
