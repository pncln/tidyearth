const mongoose = require("mongoose");

const postSchema = new mongoose.Schema({
    description: {
        type: String,
        trim: true
    },
    beforePicture: {
        type: Buffer,
        required: true
    },
    afterPicture: {
        type: Buffer,
        required: true
    },
    owner: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User'
    }
}, {
    timestamps: true
})

postSchema.pre('save', async function (next) {
    const task = this

    next()
})

const Post = mongoose.model('Post', postSchema)

module.exports = Post