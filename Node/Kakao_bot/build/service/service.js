'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _message = require('../model/message');

var _message2 = _interopRequireDefault(_message);

var _crawler_naver = require('../crawler/crawler_naver');

var _crawler_daum = require('../crawler/crawler_daum');

var _crawler_lezhin = require('../crawler/crawler_lezhin');

var _crawler_google = require('../crawler/crawler_google');

var _crawler = require('../crawler/crawler');

var _crawler2 = _interopRequireDefault(_crawler);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var naver = 'http://comic.naver.com/webtoon/weekday.nhn';
var google = 'https://www.google.co.kr/search';
var lezin = 'https://www.lezhin.com/ko';

var service = function service(req, content, callback) {
  switch (content) {
    case _message2.default.buttons[0]:
      // 직접
      callback(null, _message2.default.baseText("검색결과는 google 검색을 바탕으로 이뤄집니다."));
      break;
    case _message2.default.buttons[1]:
      // 네이버
      (0, _crawler2.default)(naver, _crawler_naver.todayNaver, callback, _message2.default.baseType);
      break;
    case _message2.default.buttons[2]:
      // 다음
      var today = String(new Date()).split(" ")[0].toLowerCase();
      var daum = 'http://webtoon.daum.net/data/pc/webtoon/list_serialized/' + today + '?timeStamp=1515819276574';
      (0, _crawler2.default)(daum, _crawler_daum.todayDaum, callback, _message2.default.baseType);
      break;
    case _message2.default.buttons[3]:
      // 레진
      break;
    default:
      (0, _crawler2.default)(google, _crawler_google.crawlerGoogle, callback, _message2.default.messageButtonType, '\uC6F9\uD230 ' + content);
  }
};

exports.default = service;