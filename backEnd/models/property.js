const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Property = new Schema(
    {
        location: { type: String, required: true },
        owner: { type: String, required: false },
        currentTenant: {type: String, required: false},
        comments: {type: String, required: false},
    },
    { timestamps: true },
)

module.exports = mongoose.model('properties', Property)