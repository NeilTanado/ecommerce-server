var express = require('express');
var router = express.Router();
const Controller = require('../controller/itemCrud');
const { multer, upload } = require('../middleware/upload');


router.post('/createitem', multer.single('image'), upload, Controller.createItem);
router.get('/readitem', Controller.readItem);
router.delete('/deleteitem/:id', Controller.deleteItem);

module.exports = router;
