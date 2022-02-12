const express = require('express')
const router = express.Router()
const shortHtmlCode = require('../../models/shortHtmlCode')

//比對資料short代碼，如果true轉跳網址，如果false跳alert
router.get('/:short', (req, res) => {
  const shortParms = req.params.short
  shortHtmlCode.where({ short: `${shortParms}` }).findOne().then(item => {
    res.redirect(item.original)
  }).catch(error => {
    console.log('404' + error)
  })
})

module.exports = router