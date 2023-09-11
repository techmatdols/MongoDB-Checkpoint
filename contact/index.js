const express = require ('express')
const {urlencoded} = require('express')
const dotenv = require('dotenv').config()
const bodyParser = require('body-parser')
const PORT = process.env.PORT || 4000
const connected = require('./config/db')

connected()
const app = express()

app.use(bodyParser.json())
app.use(express.urlencoded({extended : false}))

app.use('/contact/contactlist', require('./route/route'))


app.listen(PORT , ()=>{
    console.log(`listening on port  ${PORT}`)
})