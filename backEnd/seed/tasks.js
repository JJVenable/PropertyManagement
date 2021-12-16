const db = require('../db')
const Task = require('../models/task')

// Connect to the database
db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {
    const tasks = [
      { name: '',  AptNumber: '', issueToAddress: '', enterTenant: '', dog: '', comments: '' },
      { name: '',  AptNumber: '', issueToAddress: '', enterTenant: '', dog: '', comments: '' },
      
       
    ]

    await Plant.insertMany(tasks)
    console.log("Created some Work Orders!")
}
const run = async () => {
    await main()
    db.close()
}

run()