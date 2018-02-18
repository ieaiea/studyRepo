const util = require('../middleware/utilities');

module.exports.index = (req, res) =>{
  res.cookie('Test Cookie', 'Cookie save');
  res.render('index', {
    title : 'Index'
  })
};

module.exports.login = (req, res) =>{
  res.render('Login');
};

module.exports.loginProcess = (req, res) =>{
  const isAuth = util.auth(req.body.username, req.body.password, req.session);
  isAuth ? res.redirect('/chat') : res.redirect('/login');
};

module.exports.chat = (req, res) =>{
  res.send('Chat');
};

module.exports.logout = (req, res) => {
  util.logout(req.session);
  res.redirect('/');
};