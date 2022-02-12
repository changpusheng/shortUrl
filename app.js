const express = require('express')
const app = express()
const { engine } = require('express-handlebars')
const port = 3000
const { findOne } = require('./models/shortHtmlCode')
const routes = require('./routes')
require('./config/mongoose')

app.engine('handlebars', engine({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')
app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }))
app.use(routes)


app.listen(port, () => {
  console.log(`This server is running on http://localhost:${port}.`)
})