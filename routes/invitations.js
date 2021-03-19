const express = require('express')
const invitations = require('../models/invitations')
const router = express.Router()

//Get all data
router.get('/all', async (req, res) => {
    try {
        const getAllInvitations = await invitations.find()
        res.json(getAllInvitations)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
})

//Get one data
router.get('/get/:id', getOneInvitation, async (req, res) => {
    res.json(res.getInvitation)
})

//Create data
router.post('/create', async (req, res) => {
    const createInvite = new invitations({
        name: req.body.name,
        date: req.body.date,
        hour: req.body.hour,
        address: req.body.address
    })

    try {
        const newInvite = await createInvite.save()
        res.status(201).json(newInvite)
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
})

//Update data
router.patch('/update/:id', getOneInvitation, async (req, res) => {
    if(req.body.name != null) {
        res.getInvitation.name = req.body.name
    }

    if(req.body.date != null) {
        res.getInvitation.date = req.body.date
    }

    if(req.body.hour != null) {
        res.getInvitation.hour = req.body.hour
    }

    if(req.body.address != null) {
        res.getInvitation.address = req.body.address
    }

    try {
        const updatedInvitation = await res.getInvitation.save()
        res.json(updatedInvitation)
    } catch (error) {
        res.status(400).json({ message: error.message})
    }
})

//Delete data
router.delete('/delete/:id', getOneInvitation, async (req, res) => {
    try {
        await res.getInvitation.deleteOne()
        res.json({ message: 'Delete success!'})
    } catch (error) {
        res.status(500).json({ message: error.message})
    }
})

async function getOneInvitation(req, res, next) {
    let getInvitation
    try {
        getInvitation = await invitations.findById(req.params.id)
        if (getInvitation == null) {
            return res.status(404).json({ message: 'Invitation does not exist'})
        }
    } catch (error) {
        return res.status(500).json({ message: error.message })
    }
    res.getInvitation = getInvitation
    next()
}

module.exports = router;