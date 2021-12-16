const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Task = new Schema(
    {
        name: { type: String, required: true },
        AptNumber: { type: String, required: false },
        issueToAddress: { type: String, required: true },
        enterTenant: {type: Boolean, required: true},
        dog: {type: Boolean, required: true},
        comments: {type: String, required: false},
    },
    { timestamps: true },
)

module.exports = mongoose.model('tasks', Task)