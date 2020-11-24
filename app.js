var express = require('express');
var app = express();
var mysql = require('mysql');

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
app.use(express.json())
//app.use(cors())
app.use(express.urlencoded({extended:true}))
app.set('view engine', 'ejs')
//app.set('views', 'views')

app.get('/', function(req, res) {
  res.sendFile(__dirname + "/public/main.html");
})

app.post('/email_post', function(req, res) {
  //res.send(req.body.email)
  res.render('email', {email: req.body.email})
})

app.post('/ajax_send_email', function(req, res) {
  var email = req.body.email;
  var responseData = {};

  var query = connection.query(`select name from user where email= '${email}'`, function(err, rows) {
    if(err) throw err;
    if(rows[0]) {
      responseData.result = "ok";
      responseData.name = rows[0].name;
    }else {
      responseData.result = "none";
      responseData.name = "";
    }
    res.json(responseData);
  })

})
