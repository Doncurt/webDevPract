const express = require('express');
const router = express.Router();

// Model import
const Product = require('../models/product');


Product.methods(['get','put','post','delete'])
Product.register(router,'/products')
module.exports = router;
