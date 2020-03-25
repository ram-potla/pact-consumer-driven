const express = require('express')
const router = express.Router()
const engineer = require('../../controllers/engineers')

router.post('/addengineer', async (req, res) => {
  await engineer.create(req, res)
})

router.get('/getengineer', async (req, res) => {
  await engineer.list(req, res)
})

module.exports = router
