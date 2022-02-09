const express = require('express')
const app = express()
const { engine } = require('express-handlebars')
const port = 3000
const mongoose = require('mongoose')
const db = mongoose.connection
const shortHtmlCode = require('./models/shortHtmlCode')
const shortUrl = require('./shortUrl')

db.on('error', () => {
  console.log('mongoose error' + error)
})

db.once('open', () => {
  console.log('mongoose connected!')
})

mongoose.connect('mongodb://localhost/shortHtmlCodeDB')

app.engine('handlebars', engine({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')
app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }))

app.get('/', (req, res) => {
  res.render('home')
})

app.post('/', (req, res) => {
  const originalUrl = req.body.originalUrl
  const short = shortUrl()
  shortHtmlCode.create({
    original: originalUrl,
    short: short
  })
  console.log(short)
  console.log(originalUrl)
  res.render('shortHtml', { shortUrl: short, originalUrl })
})

app.get('/JBSURL/:short', (req, res) => {
  res.redirect('https://tw.yahoo.com/')
})

app.listen(port, () => {
  console.log(`This server is running on http://localhost:${port}.`)
})