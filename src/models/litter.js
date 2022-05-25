const mongoose = require('mongoose')

const pointSchema = new mongoose.Schema({
    coords: {
        latitude: Number,
        longitude: Number,
        altitude: Number,
        accuracy: Number,
        heading: Number,
        speed: Number
    }
})

const litterSchema = new mongoose.Schema({
    weight: {
        type: Number,
        required: true
    },
    location: [pointSchema],
    owner: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User'
    }
}, {
    timestamps: true
})

litterSchema.pre('save', async function (next) {
    const task = this
    next()
})

const Litter = mongoose.model('Litter', litterSchema)

module.exports = Litter