const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/shortHtmlCodeDB')
const db = mongoose.connection

db.on('error', () => {
  console.log('mongoose error' + error)
})

db.once('open', () => {
  console.log('mongoose connected!')
})

module.exports = db