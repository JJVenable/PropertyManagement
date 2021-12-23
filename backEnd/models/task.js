const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Task = new Schema(
    {
        name: { type: String, required: false },
        AptNumber: { type: String, required: false },
        issueToAddress: { type: String, required: false },
        enterTenant: { type: String, required: false },
        dog: { type: String, required: false },
        comments: { type: String, required: false },
    },
    { timestamps: true },
)

module.exports = mongoose.model('tasks', Task)