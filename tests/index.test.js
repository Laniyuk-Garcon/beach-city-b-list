const request = require('supertest')
const cheerio = require('cheerio')

const server = require('../server')

test('Main page works', (done) => {
  request(server)
    .get('/')
    .end((err, res) => {
      expect(err).toBe(null)
      expect(res.status).toBe(200)
      done()
    })
})

test('Main page has a form', (done) => {
  request(server)
    .get('/')
    .end((err, res) => {
      const $ = cheerio.load(res.text)
      const inputs = $('form input').length
      expect(inputs).toBe(2)
      done()
    })
})

test('Profiles directory works', (done) => {
  request(server)
    .get('/profiles')
    .end((err, res) => {
      expect(err).toBe(null)
      expect(res.status).toBe(200)
      done()
    })
})

test('Profiles directory has profile images', (done) => {
  request(server)
    .get('/profiles')
    .end((err, res) => {
      const $ = cheerio.load(res.text)
      const profiles = $('profile-image')
      expect(profiles).toBe(6)
      done()
    })
})

test('Profile page works', (done) => {
  request(server)
    .get('/profile/1')
    .end((err, res) => {
      expect(err).toBe(null)
      expect(res.status).toBe(200)
      done()
    })
})

test('Profile page has a form', (done) => {
  request(server)
    .get('/profile/1')
    .end((err, res) => {
      const $ = cheerio.load(res.text)
      const input = $('form input')
      expect(input).toBe(2)
    })
})