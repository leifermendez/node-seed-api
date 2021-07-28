const mongoose = require('mongoose')

const HotelScheme = new mongoose.Schema({
    name: {
        type: String
    },
    price: {
        type: Number
    },
    rooms: {
        type: Number
    }
},
    {
        timestamps: true,
        versionKey: false
    })

module.exports = mongoose.model('hotels', HotelScheme)