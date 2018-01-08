var express = require('express');
var app = express();
var path = require('path');

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', function(req, res){ // express 객체를 할당받은 app을 이용합니다.
// req에는 클라이언트쪽에서 보낸 요청이 들어있고, res에는 서버에서 클라이언트로 응답을해주는 것이 들어있습니다.
  res.send('Hello Express');  // 서버에서 클라이언드로 send 해줍니다 (화면에 그려져요). Hello Express라는 문자를
});

app.get('/login', function(req, res){
  res.send('Login Page')
});

app.get('/join', function(req, res){
  res.send('join Page')
});

app.listen(8080, function(){
  console.log('Server Run.... 8080');
});