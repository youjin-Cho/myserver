var express = require('express');
var app = express();
var router = require('./router/index');

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

app.use(router)
