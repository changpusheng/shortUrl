const mongoose = require('mongoose')
const ShortHtmlCode = require('../shortHtmlCode')
const db = require('../../config/mongoose')

db.on('error', () => {
  console.log('mongoose error' + error)
})

db.once('open', () => {
  ShortHtmlCode.create({
    original: 'https://www.yahoo.com.tw/', short: 'seeds123'
  })
  console.log('done!')
})