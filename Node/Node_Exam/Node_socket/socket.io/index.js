let io = require('socket.io');
const config = require('../config');

const socketConnection = function(socket){
  socket.emit('message', {message: 'Hey!'});
};

exports.startIo = function(server){
  io = io.listen(server);
  const packtchat = io.of('/packtchat');
  packtchat.on('connection', socketConnection);

  return io;
};