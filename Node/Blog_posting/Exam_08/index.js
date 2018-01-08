var express = require('express');
var app = express();
var logger = require('morgan');
var bodyParser = require('body-parser');
var path = require('path');
var passport = require('passport');
var KakaoStrategy = require('passport-kakao').Strategy;

app.set('PORT', 5000);
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(require('express-session')({
	secret: 'keyboard cat',
	resave: true,
	saveUninitialized: true
}));
app.use(passport.initialize());
app.use(passport.session());


app.get('/', function (req, res) {
	console.log('user', req.user);
	res.render('home', {'user': req.user})
});

app.get('/kakao', passport.authenticate('kakao-login'));

passport.serializeUser(function(user, done) {
	done(null, user);
});

passport.deserializeUser(function(user, done) {
	done(null, user);
});


passport.use('kakao-login', new KakaoStrategy({
		clientID: '20109adc83e0f4aab8842767b4dc2625',
		clientSecret: 'MohWCcskM6tWqmf2ydazl5ZmkGwGUUzh',
		callbackURL: 'http://localhost:5000/oauth/kakao/callback'
	},
	function (accessToken, refreshToken, profile, done) {
		return done(null, profile);
	}));

app.get('/oauth/kakao/callback', passport.authenticate('kakao-login', {
	successRedirect: '/',
	failureRedirect: '/'
}));

app.listen(app.get('PORT'), function () {
	console.log(app.get('PORT') + ' Server Run....');
});