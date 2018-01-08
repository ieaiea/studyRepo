const express = require('express');
const router = express.Router();
const gravatar = require('gravatar');
const passport = require('passport');

router.get('/', (req, res, next) => {
  res.render('index', { title: 'Express from server folder' });
});

router.get('/login', function(req, res, next) {
  res.render('login', { title: 'Login Page', message: req.flash('loginMessage') });
});

router.get('/signup', function(req, res) {
  res.render('signup', { title: 'Signup Page', message: req.flash('signupMessage') });
});

router.post('/login', passport.authenticate('local-login', {
  // 성공시 프로필로, 실패시 로그인페이지
  successRedirect : '/profile',
  failureRedirect : '/login',
  failureFlash : true
}));

router.post('/signup', passport.authenticate('local-signup', {
  // 성공시 프로필페이지 실패시 로그인페이지
  successRedirect : '/profile',
  failureRedirect : '/login',
  failureFlash : true
}));

router.get('/logout', (req, res) => {
  req.logout();
  res.redirect('/');
});

// 로그인 여부 판단 함수
const isLoggedIn = (req, res, next) => {
  if(req.isAuthenticated()) return next();
  res.redirect('/login');
};

router.get('/profile', isLoggedIn, (req, res, next) => {
  res.render('profile', {title : 'Profile Page', user : req.user, avatar: gravatar.url(req.user.email, {s:'100', r:'x', d:'retro'},true)});
});

module.exports = router;
