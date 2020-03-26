const express = require('express')
const fs = require('fs')
const router = express.Router()

// const data = require('./data.json')

router.get('/', (req, res) => {

  fs.readFile('./data.json', 'utf8', (err, data) => {
    if (err) console.log(err)

    const viewData = JSON.parse(data)

    const template = "home"

    res.render(template, viewData)
    
})
//   res.send('Profile page goes here')
})

router.get('/:id', (req, res) => {

  fs.readFile('./data.json', 'utf8', (err, data) => {
    if (err) console.log(err)

    let obj = JSON.parse(data)
    let character = obj.characters.find(element => element.id == req.params.id)

    const viewData = character

    const template = "profile"

    res.render(template, viewData)

  })

//   res.send('Character Profile goes here')
})

module.exports = router