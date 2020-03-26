const app = require('./app')
const initializeDatabase = require('./db')
const HOST = process.env.HOST || localhost
const PORT = process.env.PORT || 5000

initializeDatabase()
  .then(() => {
    app.listen(PORT, () => {
      // eslint-disable-next-line no-console
      console.log(`app listening on port http://${HOST}:${PORT}`)
    })
  })
  .catch(err => {
    // eslint-disable-next-line no-console
    console.error('Failed to make database connection')
    // eslint-disable-next-line no-console
    console.log(err)
    process.exit(1)
  })
