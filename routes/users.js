var express = require('express');
var router = express.Router();
const Controller = require('../controller/userCrud');


/* GET users listing. */
router.post('/createuser', Controller.createId)
router.post('/login', Controller.login)

module.exports = router;
