const express = require('express');
const path = require('path');
const routes = require('./server/routes');
const users = require('./server/routes/users');
const comments = require('./server/controllers/comment');


//mongo DB
const mongoose = require('mongoose');

// session 저장
const session = require('express-session');
const MongoStore = require('connect-mongo')(session);

// passport
const passport = require('passport');

// flash message
const flash = require('connect-flash');

const app = express();

// server port 처리
app.set('port', process.env.PORT || 3000);

// view
app.set('views', path.join(__dirname, 'server/views/pages'));
app.set('view engine', 'ejs');

// connect DB
const config = require('./server/config/config');
const db = mongoose.connection;
db.on('error', console.error);
db.once('open', function(){
  // CONNECTED TO MONGODB SERVER
  console.log("Connected to mongod server");
});

mongoose.connect('localhost:27017');

// passport 설정
require('./server/config/passport')(passport);

// passport session
app.use(session({
  secret : 'appear',
  saveUninitialized : true,
  resave : true,
  // express-session과 connect-mongo를 이용해 Mongo db에 session 저장
  store: new MongoStore({
    url : config.url,
    collection : 'sessions'
  })
}));

// flash message  위치 조절이 중요 세션을 필요로한다
app.use(flash());

// router
app.use(express.static(path.join(__dirname, 'public')));
app.use('/', routes);
app.use('/user', users);

// controller comment
app.get('/comments', comments.hasAuthorization, comments.list);
app.post('/comments', comments.hasAuthorization, comments.create);


// passport 초기화
app.use(passport.initialize());
// login session
app.use(passport.session());

// 404 에러처리
app.use((req, res, next) => {
  const err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// server Run
app.listen(app.get('port'), () => {
  console.log('server start', app.get('port'));
});