// passport module
const LocalStrategy = require('passport-local').Strategy;
// User Model
const User = require('../model/user');

module.exports = (passport) => {
  // passport 초기화 및 session을 위해 직렬화
  passport.serializeUser((user, done) => {
    done(null, user.id);
  });
  // passport 역직렬화
  passport.deserializeUser((id, done) => {
    User.findById(id, (err, user) => {
      done(err, user);
    });
  });
  // local startegy
  passport.use('local-login', new LocalStrategy({
    usernameField: 'email',
    passwordField: 'password',
    passReqToCallback: true // 인증을 수행하는 인증 함수로 HTTP request를 그대로  전달할지 여부를 결정한다
  }, (req, email, password, done) => {
    if (email) email = email.toLowerCase();
    // 비동기 처리 시스템 커널로 작업을 넘김
    process.nextTick(() => {
      User.findOne({'local.email': email}, (err, user) => {
        // error
        if (err) return done(err);
        if (!user) return done(null, false, req.flash('loginMessage', 'No User found'));
        if (!user.validPassword(password)) return done(null, false, req.flash('loginMessage', 'Wrong password'));
        // success
        return done(null, user);
      });
    });
  }));
  // sign Up
  passport.use('local-signup', new LocalStrategy({
      usernameField: 'email',
      passwordField: 'password',
      passReqToCallback: true
    }, (req, email, password, done) => {
    console.log('asdasda');
      if(email) email = email.toLowerCase();
      process.nextTick(() => {
        // User가 로그인 전이라면
        if(!req.user){
          User.findOne({'local.email' : email}, (err, user) => {
            if(err) return done(null);
            // 이메일 중복검사
            if(user) return done(null, false, req.flash('signupMessage', 'email is already taken'));
            // user 생성
            const newUser = new User();
            newUser.local.name = req.body.name;
            newUser.local.email = email;
            newUser.local.password = newUser.generateHash(password);
            // save
            newUser.save((err) => {
              if(err) throw err;
            });
          });
        }else{
          return done(null, req.user);
        }
      })
    }
  ))
};