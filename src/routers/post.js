const express = require('express')
const router = new express.Router()
const auth = require('../middleware/auth')
const Post = require('../models/post')

// MAKE A NEW POST
router.post('/posts', auth, async (req, res) => {
    const post = new Post({
        ...req.body,
        owner: req.user._id
    })

    try {
        await post.save()
        res.status(201).send(post)
    } catch (e) {
        res.status(400).send(e)
    }
})

// UPDATE A POST

router.patch('/posts/:id', auth, async (req, res) => {
    const _id = req.params.id
    const updates = Object.keys(req.body)
    const allowedUpdates = ['description', 'beforePicture', 'afterPicture']
    const isValidOperation = updates.every(update => allowedUpdates.includes(update))

    if (!isValidOperation) {
        return res.status(400).send({error: 'Updates not allowed!'})
    }

    try {
        const post = await Post.findOne({ _id, owner: req.user._id})

        if (!post) {
            return res.status(404).send()
        }

        updates.forEach(update => task[update] = req.body[update])
        await post.save()
        res.send(post)
    }
    catch (e) {
        res.status(400).send(e)
    }
})

// DELETE A POST

router.delete('/posts/:id', auth, async (req, res) => {
    const _id = req.params.id

    try {
        const post = await Post.findOneAndDelete({ _id: req.user._id })

        if (!post) {
            return res.status(404).send()
        }

        res.send(post)
    } catch (e) {
        res.status(500).send(e)
    }
})

module.exports = router