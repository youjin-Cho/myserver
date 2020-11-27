var express = require('express');
var app = express();
var path = require('path');
var router = express.Router();
var mysql = require('mysql');

// DATABASE SETTING
var connection = mysql.createConnection({
  host : 'localhost',
  port : '3306',
  user : 'root',
  password : 'dbeld712',
  database : 'nodedb'
});
connection.connect()

// ROUTER
router.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, '/../../public/join.html'))
})

router.post('/', function(req, res) {
  var body = req.body;
  var email = body.email;
  var name = body.name;
  var passwd = body.password;

  var query = connection.query(`insert into user (email, name, pw) values ('${email}', '${name}', '${passwd}')`, function(err, rows) {
    if (err) throw err;
    console.log("ok db insert");
  })
})
module.exports = router;
