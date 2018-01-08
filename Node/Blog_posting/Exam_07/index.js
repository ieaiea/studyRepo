var express = require('express');
var path = require('path');
var routes = require('./routes');
var passport = require('passport');
var mongoose = require('mongoose');
var session = require('express-session');
var flash = require('connect-flash');
var bodyParser = require('body-parser');
var morgan = require('morgan');
var app = express();
require('./db/passport')(passport);

app.set('port', process.env.PORT || 3000);

// DB 설정
mongoose.connect('mongodb://passport:passport@ds161455.mlab.com:61455/appear');
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('Conneted mongoDB');
});

// http 설정
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// view 설정
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(session({
  secret: '비밀코드',
  resave: true,
  saveUninitialized: true
})); // 세션 활성화

// flash는 세션을 필요로합니다. session 아래에 선언해주셔야합니다.
app.use(flash());

// passport 초기화 =
app.use(passport.initialize());
app.use(passport.session());


app.use('/', routes);

app.listen(app.get('port'), function(){
  console.log('Server Run....', app.get('port'));
});