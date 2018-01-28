var socket = require('socket.io');
var express = require('express');
var path = require('path');
var app = express();

var seats = [
  [1, 1, 0, 1, 1, 0, 0, 0, 0, 1, 1, 0, 1, 1],
  [1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1],
  [1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1],
  [1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1],
  [1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1],
  [1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1],
  [1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1],
  [1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1],
  [1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1],
  [1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1],
  [1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1],
  [1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1]
];

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.get('/', function(req, res){
  res.render('index');
});

app.get('/seats', function(req, res, next){
  res.send(seats);
});

var server = app.listen(3000, function(){
  console.log('server run ....');
});

var io = socket.listen(server);
io.sockets.on('connection', function(socket){
  socket.on('reserve', function(data){
    console.log('server reserve', data);
    seats[data.y][data.x] = 2;
    io.sockets.emit('reserve', data);
  });
});


