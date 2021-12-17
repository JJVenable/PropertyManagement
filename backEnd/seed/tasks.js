const db = require('../db')
const Task = require('../models/task')


// Connect to the database
db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {
    const tasks = [
      { name: 'a',  AptNumber: 'b', issueToAddress: 'c', enterTenant: 'd', dog: 'e', comments: 'f' },
      { name: 'g',  AptNumber: 'h', issueToAddress: 'i', enterTenant: 'j', dog: 'k', comments: 'l' },
    ]

    await Task.insertMany(tasks)
    console.log("Created some Work Orders!")

}
const run = async () => {
    await main()
    db.close()
}

run()