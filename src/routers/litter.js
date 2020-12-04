const express = require('express')
const router = new express.Router()
const auth = require('../middleware/auth')
const Litter = require('../models/Litter')

router.get('/litter', auth, async (req, res) => {
    const litter = new Litter({
        ...req.body,
        owner: req.user._id
    })

    try {
        await litter.save()
        res.status(201).send(litter)
    } catch (e) {
        res.status(400).send(e)
    }
})

module.exports = router