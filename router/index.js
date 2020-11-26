var express = require('express');
var app = express();
var path = require('path');
var router = express.Router();
var main = require('./main');
var email = require('./email');

// Routing
router.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, '/../public/main.html'))
})

// 라우팅 관리
router.use('/main', main)
router.use('/email', email)

module.exports = router;
