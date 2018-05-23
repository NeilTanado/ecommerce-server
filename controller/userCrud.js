const User = require('../models/userModel');


module.exports ={

  createId:(req,res)=>{
    var newUser = new User(req.body);
    newUser.save()
      .then(dataUser=>{
        //karena create jadi 201
        res.status(201).json({
          message: 'berhasil add',
          dataUser
        })
      })
      .catch((err) => {
        res.status(500).json({
          message:'gagal create ada yang salah'
        })
      })
  },

  login:(req,res)=>{
    User.findOne({username:req.body.username})
      .then(dataUser=>{
        if(dataUser.password === req.body.password){
          let statusLog = 'login'
          res.status(200).json({
            message: 'berhasil login',
            dataUser,statusLog
          })
        }else{
          res.status(400).json({
            message: 'gagal login salah password'
          })
        }
      })
      .catch((err) => {
        res.status(500).json({
          message:'gagal create ada yang salah'
        })
      })
  },

  readUser:(req,res)=>{
    User.find()
    .then(data=>{
      res.status(200).json({
        message: 'data dikirim',
        data
      })
    })
    .catch((err) => {
      res.status(400).json({
        message: 'anda tidak ada authorized'
      })
    })
  },

  updateUser:(req,res)=>{
    User.update({
      _id:req.params.id
    },{
      $set:req.body
    })
    .then(data=>{
      res.status(200).json({
        message: 'data diupdate',
        data
      })
    })
    .catch((err) => {
      res.status(400).json({
        message: 'anda tidak ada authorized'
      })
    })
  },

  deleteUser:(req,res)=>{
    User.findByIdAndRemove({
      _id:req.params.id
    })
    .then(data=>{
      res.status(200).json({
        message: 'data didelete',
        data
      })
    })
    .catch((err) => {
      res.status(400).json({
        message: 'anda tidak ada authorized'
      })
    })
  }
}
