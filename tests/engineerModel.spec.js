const mongoose = require('mongoose')
const EngineerModel = require('../models/engineers')
const engineerData = { name: 'Ram', practice: 'test automation' }
describe('Engineer model', () => {
  beforeAll(async () => {
    try {
      await mongoose.connect(global.__MONGO_URI__, {
        useNewUrlParser: true,
        useCreateIndex: true,
        useUnifiedTopology: true
      })
    } catch (err) {
      process.exit(1)
    }
  })

  it.skip('create & save engineer successfully', async () => {
    const validEngineer = new EngineerModel(engineerData)
    const savedUser = await validEngineer.save()
    // Object Id should be defined when successfully saved to MongoDB.
    expect(savedUser._id).toBeDefined()
    expect(savedUser.name).toBe(engineerData.name)
    expect(savedUser.practice).toBe(engineerData.practice)
  })

  afterAll(async () => {
    await mongoose.disconnect()
  })
})
