const config = require('./config');
const express = require('express');
const app = express();
const io = require('./socket.io');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const RedisStore = require('connect-redis')(session);
const path = require('path');

app.set('views', path.join(__dirname, 'view'));
app.set('view engine', 'ejs');

app.use(cookieParser(config.secret));
app.use(session({
  secret : config.secret,
  saveUninitialized : true,
  resave : true,
  store : new RedisStore({ url : 'redis://localhost'})
}));


app.get('/', function(req, res){
  console.log('hello');
  res.render('layout');
});

const server = app.listen(config.port, function(){
  console.log('server on ....', config.port);
});

io.startIo(server);