const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser')



//connect to database
mongoose.connect('mongodb://localhost/rest');
const app = express()
// body-parser
app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json());

// Routes
app.use('/api', require('./routes/api'));

app.listen(3000,()=>{
  console.log('Rest app on port 3000');
})
