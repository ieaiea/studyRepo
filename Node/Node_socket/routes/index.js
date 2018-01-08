// Import Express and Router
var express = require('express');
var router = express.Router();

// Get
router.get('/', function(req, res) {
  res.render('index', {
	  title: '실시간 채팅서비스 입니다.',
	  lead: '당신의 이름을 입력하시고 입장해주세요'
  });
});

module.exports = router;
