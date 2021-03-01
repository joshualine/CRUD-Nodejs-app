//-----IMPORTS-------//
const express = require('express');
const mongoose = require('mongoose');
const ejs = require('ejs');
const bodyParser = require('body-parser')

mongoose.connect('mongodb://localhost/my_database', {useNewUrlParser: true})
const app = express()


app.listen(3000, () => {
  console.log("App listening on port 3000")
})
app.use(express.static('public'))
app.set('view engine', 'ejs')
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))


app.get('/', (req,res) => {
  res.render('index');
})
app.post('/', (req, res) => {
  res.redirect('new_post')
})