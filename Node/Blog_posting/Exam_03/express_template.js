var express = require('express');
var app = express();
var path = require('path');

app.set('view engine', 'ejs'); // view engine를 ejs로 하겠다는거에요
app.set('views', path.join(__dirname, 'views'));

app.get('/', function(req, res){
  res.render('index', {title : '메인 페이지입니다. 저는 ejs 템플릿엔진을 사용해요'});
});

app.get('/login', function(req, res){
  res.render('login', {member : ['a', 'p', 'p', 'e', 'a', 'r']});
});
app.get('/join', function(req, res){
  res.send('join Page')
});

app.listen(3000, function(){
  console.log('Server Run... port 3000');
});