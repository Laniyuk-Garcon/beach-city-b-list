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
})


router.post('/', (req, res) => {
  fs.readFile('./data.json', 'utf8', (err, data) => {
    if (err) console.log(err)
    const obj = JSON.parse(data)

    obj.user.name = req.body.name

    const json = JSON.stringify(obj, null, 2)

    fs.writeFile('./data.json', json, 'utf8', (err, data) => {
      if(err) {
        console.log(err)
      } else {
        console.log('Logged in')

        res.redirect('/profile')
      }
    })
  })
})


router.post('/:id', (req, res) => {
  fs.readFile('./data.json', 'utf8', (err, data) =>{
  if (err) console.log(err)
  let obj = JSON.parse(data)
  let character = obj.characters.find(element => element.id == req.params.id)
  const postToFeed = {name:obj.user.name, image:obj.user.image, post:req.body.Comment}
  //res.redirect('/' + req.params.id)
  character.feed.push(postToFeed)
  console.log(character)
  const json = JSON.stringify(obj, null, 2)

    fs.writeFile('./data.json', json, 'utf8', (err, data) => {
      if(err) {
        console.log(err)
      } else {
        console.log('Logged in')

        res.redirect('/profile/' + req.params.id)
  }
})
})
})


module.exports = router

