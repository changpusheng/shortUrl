const express = require('express')
const app = express()
const { engine } = require('express-handlebars')
const port = 3000
const mongoose = require('mongoose')
const { findOne } = require('./models/shortHtmlCode')
const db = mongoose.connection
const shortHtmlCode = require('./models/shortHtmlCode')
const shortUrl = require('./public/javascript/shortUrl')

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

//比對資料庫原始網址original，如果false新增資料，true 帶入該筆short的資料
app.post('/', (req, res) => {
  const originalUrl = req.body.originalUrl
  const short = shortUrl()
  shortHtmlCode.where({ original: originalUrl }).findOne().lean().then(item => {
    if (item.original === originalUrl) {
      res.render('shortHtml', { shortUrl: item.short, originalUrl: item.original })
    }
  }).catch(() => {
    shortHtmlCode.create({
      original: originalUrl,
      short: short
    })
    res.render('shortHtml', { shortUrl: short, originalUrl: originalUrl })
  })
})

//比對資料short代碼，如果true轉跳網址，如果false跳alert
app.get('/JBSURL/:short', (req, res) => {
  const shortParms = req.params.short
  shortHtmlCode.where({ short: `${shortParms}` }).findOne().then(item => {
    res.redirect(item.original)
  }).catch(error => {
    console.log('404' + error)
  })
})

app.listen(port, () => {
  console.log(`This server is running on http://localhost:${port}.`)
})