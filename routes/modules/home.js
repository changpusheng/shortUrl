const express = require('express')
const router = express.Router()
const shortUrl = require('../../public/javascript/shortUrl')
const shortHtmlCode = require('../../models/shortHtmlCode')

router.get('/', (req, res) => {
  res.render('home')
})

//比對資料庫原始網址original，如果false新增資料，true 帶入該筆short的資料
router.post('/', (req, res) => {
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

module.exports = router