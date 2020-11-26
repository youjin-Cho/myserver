var express = require('express');
var app = express();
var mysql = require('mysql');
var main = require('./router/main');
var email = require('./router/email');

var connection = mysql.createConnection({
  host : 'localhost',
  port : '3306',
  user : 'root',
  password : 'dbeld712',
  database : 'nodedb'
});

connection.connect(function(err){
  if (err) {
    console.error('mysql connection error');
    console.error(err);
    throw err;
  }else {
    console.log('연결에 성공하였습니다.');
  }
});

app.listen(3000, function(){
  console.log('express server is running on port 3000');
});

app.use(express.static('public'))
// express에서 JSON Ruquest Body 파싱
// body-parser는 4.16 이전 버전에서 사용
app.use(express.json())
//app.use(cors())
app.use(express.urlencoded({extended:true}))
app.set('view engine', 'ejs')
// app.set('views', 'views')

app.use('/main', main)
app.use('/email', email)

app.get('/', function(req, res) {
  console.log('test')
  res.sendFile(__dirname + '/public/main.html')
})
