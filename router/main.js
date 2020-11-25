var express = require('express');
var app = express();
var router = express.Router();

router.get('/main', function(req, res) {
  res.sendFile(__dirname + '/public/main.html')
});

module.exports = router;
