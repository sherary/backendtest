const mongoose = require('mongoose')
const partySchema = new mongoose.Schema({
    
    //attendee name
    name: {
        type: String,
        required: true
    },

    //party type
    party: {
        type: String,
        required: true,
        default: 'Birthday'
    },

    //party date
    date: {
        type: Date,
        required: true,
        default: Date.now
    },

    // party time
    hour: {
        type: String,
        required: true
    },

    //place
    address: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model('Party', partySchema)