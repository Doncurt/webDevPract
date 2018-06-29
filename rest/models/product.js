const restful = require('node-restful');
// let mongoos exptend node restful to havr e resful api avalible
const mongoose = restful.mongoose;


//Mongoose schema

const productSchema = new mongoose.Schema({
  name: String,
  sku: String,
  price: Number
})
// export the mode as Products
module.exports = restful.model('Products', productSchema)
