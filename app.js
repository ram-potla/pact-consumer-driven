const express = require('express')
const bodyparser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')

require('dotenv').config()

const engineerRoutes = require('./api/routes/engineers')

const app = express()

// middleware
app.use(cors())
app.use(bodyparser.json())
app.use(bodyparser.urlencoded({ extended: false }))

app.use(morgan('dev'))

app.use('/engineers', engineerRoutes)

app.use((req, res, next) => {
  const error = new Error('Not found from server')
  error.status = 404
  next(error)
})

app.use((error, req, res, next) => {
  res.status(error.status || 500)
  res.json({
    error: {
      code: error.status || 500,
      message: error.message
    }
  })
})

module.exports = app
