const express = require('express')
const index = require('./routes/index-route')
const profile = require('./routes/profile-route')
const hbs = require('express-handlebars')

const server = express()

server.engine('hbs', hbs({
  defaultLayout: 'main',
  extname: 'hbs'
}))
server.set('view engine', 'hbs')

server.use(express.static('public'))
server.use(express.urlencoded({
  extended: true
}))

server.use('/', index)
server.use('/profile', profile)

module.exports = server