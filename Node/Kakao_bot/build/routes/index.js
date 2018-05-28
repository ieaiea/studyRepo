'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _message = require('../model/message');

var _message2 = _interopRequireDefault(_message);

var _service = require('../service/service');

var _service2 = _interopRequireDefault(_service);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = _express2.default.Router();

var checkUserKey = function checkUserKey(req, res, next) {
  if (req.body.user_key !== undefined) {
    next();
  } else {
    res.status(500).send({ error: 'user_key is undefined' });
  }
};

router.get('/keyboard', function (req, res) {
  _message2.default.sendMessage(res, _message2.default.buttonsType());
});

router.post('/message', checkUserKey, function (req, res) {
  var _obj = {
    user_key: req.body.user_key,
    type: req.body.type,
    content: req.body.content
  };

  (0, _service2.default)(req, _obj.content, function (err, result) {
    !err ? _message2.default.sendMessage(res, result) : _message2.default.sendMessage(res, _message2.default.baseType('다시 시도해주세요'));
  });
});

exports.default = router;