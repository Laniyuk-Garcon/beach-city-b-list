const express = require('express')
const fs = require('fs')
const router = express.Router()

// const data = require('./data.json')

router.get('/', (req, res) => {

  fs.readFile('./data.json', 'utf8', (err, data) => {
    if (err) console.log(err)

    let obj = JSON.parse(data)

    const viewData = {
      //data: obj
    }

    const template = ""

    res.render(template, viewData)

  })
  res.send('Profile page goes here')
})

router.get('/:id', (req, res) => {

  fs.readFile('./data.json', 'utf8', (err, data) => {
    if (err) console.log(err)

    let obj = JSON.parse(data)

    const viewData = {
      //data: obj
    }

    const template = ""

    res.render(template, viewData)

  })

  res.send('Character Profile goes here')
})

module.exports = router