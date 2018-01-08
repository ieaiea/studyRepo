const gravatar = require('gravatar');
const Comment = require('../model/comments');

// 라우터 형식으로 만들 수 있으나 컨트롤러 방식으로도 진행해보고자 컨트롤러 형식으로 변경

// comment list
exports.list = (req, res) => {
  Comment.find().sort('-created')
    .populate('user', 'local-email')
    .exec((err, comments) => {
      if (err) return res.send(400, {message: err});
      res.render('comments', {
        title: 'Comments Pages',
        comments: comments,
        gravatar: gravatar.url(comments.email, {s: '80', r: 'x', d: 'retro'}, true)
      });
    })
};

// comment write
exports.create = (req, res) => {
  const comments = new Comment(req.body);
  comments.user = req.user;
  comments.save((err) => {
    if(err) return res.send(400, {message : err});
  });
  res.redirect('/comments');
};

// login check
exports.hasAuthorization = (req, res, next) => {
  if(req.isAuthenticated()) return next();
  res.redirect('/login');
};