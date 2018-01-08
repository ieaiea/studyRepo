var express = require('express');
var passport = require('passport');
var router = express.Router();

router.get('/', function(req, res){
  res.render('index', {title : '메인', user : req.user}); // 로그인에 성공할시 req.user에 세션값이 담겨있게됩니다.
});

router.get('/signin', function(req, res){
  res.render('sign', { title: '로그인', link : 'signin', message : req.flash('signinMessage')});
});

router.get('/signup', function(req, res){
  res.render('sign', { title: '회원가입', link : 'signup', message : req.flash('signupMessage')});
});
router.get('/logout', (req, res) => {
  req.logout();
  res.redirect('/');
});

router.post('/signin', passport.authenticate('local-signin', {
  successRedirect : '/',
  failureRedirect : '/signin',
  failureFlash : true
}));

router.post('/signup', passport.authenticate('local-signup', {
  successRedirect : '/',
  failureRedirect : '/signup',
  failureFlash : true
}));

module.exports = router;