const Item = require('../models/itemModel');


module.exports ={

  createItem:(req,res)=>{
    var newItem = new Item({
      image : req.file.imageURL,
      item : req.body.item,
      stock : req.body.stock,
      price : req.body.price,
      description: req.body.description
    });
    newItem.save()
      .then(dataUser=>{
        console.log('masuk then');
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

  readItem:(req,res)=>{
    Item.find()
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

  updateItem:(req,res)=>{
    Item.update({
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

  deleteItem:(req,res)=>{
    Item.findByIdAndRemove({
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
