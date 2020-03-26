const express = require('express')
const index = require('./routes/index-route')
const profile = require('./routes/profile-route')

const server = express()

server.use(express.static('public'))
server.use(express.urlencoded({
  extended: true
}))

server.use('/', index)
server.use('/profile', profile)

module.exports = server