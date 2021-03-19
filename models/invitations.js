const mongoose = require('mongoose')
const inviteSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },

    date: {
        type: Date,
        required: true,
        default: Date.now
    },

    hour: {
        type: String,
        required: true
    },

    address: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model('Invite', inviteSchema)