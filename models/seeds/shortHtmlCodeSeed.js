const mongoose = require('mongoose')
const ShortHtmlCode = require('../shortHtmlCode')
mongoose.connect('mongodb://localhost/shortHtmlCodeDB')
const db = mongoose.connection

db.on('error', () => {
  console.log('mongoose error' + error)
})

db.once('open', () => {
  console.log('mongoose connected!')
  ShortHtmlCode.create({
    original: 'https://www.yahoo.com.tw/', short: 'https://shortTheUrl/seeds123'
  })
  console.log('done!')
})