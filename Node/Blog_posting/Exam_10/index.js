var socket = require('socket.io');
var express = require('express');
var path = require('path');
var app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.get('/', function(req, res){
  res.render('index');
});

var server = app.listen(3000, function(){
  console.log('server run ....');
});

var io = socket.listen(server);
var id = 0;

io.sockets.on('connection', function(socket){ // 웹 소켓 서버에 접속할때 발생
  id = socket.id; // id 가 주어집니다.

  socket.on('send message', function (msg) {
    console.log('받은 메세지', msg);

    // Client Event 발생
    // Public io.sockets.emit('new message', msg);
    // Broadcast socket.broadcast.emit('new message', msg);
    io.sockets.sockets[id].emit('new message', msg);
  });
});
