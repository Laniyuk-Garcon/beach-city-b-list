const express = require ('express')
const router = express.Router()

router.get('/', (req, res) => {

    res.send('Profile page goes here')
})

router.get('/:id', (req, res) => {
    res.send('Character Profile goes here')
})

module.exports = router