const express = require('express')

const router = express.Router()

router.get('/', (req, res) => {
  res.send('Fake login screen goes here')
})

module.exports = router
