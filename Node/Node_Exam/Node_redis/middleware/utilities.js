// post 보안
module.exports.csrf = function(req, res, next){
  res.locals.token = req.csrfToken();
  next();
};

// 로그인 체크
module.exports.authenticated = (req, res, next) => {
  res.locals.isAuthenticated = req.session.isAuthenticated;
  if(req.session.isAuthenticated){
    res.locals.user = req.session.user;
  }
  next();
};

module.exports.requireAuthentication = (req, res, next) => {
  req.session.isAuthenticated ? next() : res.redirect('/login');
};

// 로그인 (간단)
module.exports.auth = (username, password, session) => {
  const isAuth = username === 'go';
  if(isAuth) {
    session.isAuthenticated = isAuth;
    session.user = {username : 'go'}
  }
  return isAuth;
};

module.exports.logout = (session) => {
  session.isAuthenticated = false;
  delete session.user;
};

