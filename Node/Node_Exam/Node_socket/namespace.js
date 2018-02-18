const io = require('socket.io').listen(4000);

io.of('/vip').on('connection', function (socket) {
  socket.on('join', function(data){
    socket.username = data.username;
    socket.broadcast.emit('join', {username : data.username, socket : socket.id });
  });

  socket.on('getuser', function(){
    socket.broadcast.emit('getuser', {username : socket.username});
  });

  socket.on('privateuser', function(data){
    io.of('/vip').connected[data.socket].emit('getuser',
      {username : socket.username, priv : true});
  });

});
