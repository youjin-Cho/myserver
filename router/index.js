var express = require('express');
var app = express();
var path = require('path');
var router = express.Router();
var main = require('./main/main');
var email = require('./email/email');
var join = require('./join/index');
// Routing
router.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, '/../public/main.html'))
})

// 라우팅 관리
router.use('/main', main)
router.use('/email', email)
router.use('/join', join)

module.exports = router;
