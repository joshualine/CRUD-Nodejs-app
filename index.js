//-----IMPORTS-------//
const express = require('express');
const mongoose = require('mongoose');
const ejs = require('ejs');

mongoose.connect('mongodb://localhost/my_database', {useNewUrlParser: true})
const app = express()


app.listen(3000, () => {
  console.log("App listening on port 3000")
})
app.use(express.static('public'))
app.set('view engine', 'ejs')


app.get('/', (req,res) => {
  res.render('index');
})
