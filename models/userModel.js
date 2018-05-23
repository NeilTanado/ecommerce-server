const mongoose = require('mongoose');
const Schema = mongoose.Schema


let userSchema = mongoose.Schema({
  username : String,
  name: String,
  password: String,
  admin : Boolean
})

let User = mongoose.model('user',userSchema);



module.exports = User
