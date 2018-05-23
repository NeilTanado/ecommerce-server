const mongoose = require('mongoose');
const Schema = mongoose.Schema


let userSchema = mongoose.Schema({
  item: String,
  price: Number,
  image : String,
  stock : Number,
  description : String
})

let Item = mongoose.model('item',userSchema);



module.exports = Item
