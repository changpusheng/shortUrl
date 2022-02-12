const express = require('express')
const router = express.Router()
const home = require('../routes/modules/home')
const search = require('../routes/modules/search')

router.use('/', home)
router.use('/JBSURL', search)

module.exports = router