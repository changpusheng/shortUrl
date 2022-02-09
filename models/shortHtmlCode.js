const { text } = require('express')
const mongoose = require('mongoose')
const Schema = mongoose.Schema
const shortHtmlCodeSchema = new Schema({
  original: {
    type: String,
    required: true
  }, short: {
    type: String,
    required: true
  }
})

module.exports = mongoose.model('ShortHtmlCode', shortHtmlCodeSchema)

