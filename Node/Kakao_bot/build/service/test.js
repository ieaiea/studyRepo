'use strict';

var _message = require('../model/message');

var _message2 = _interopRequireDefault(_message);

var _crawler_naver = require('../crawler/crawler_naver');

var _crawler_daum = require('../crawler/crawler_daum');

var _crawler_lezhin = require('../crawler/crawler_lezhin');

var _crawler_google = require('../crawler/crawler_google');

var _crawler = require('../crawler/crawler');

var _crawler2 = _interopRequireDefault(_crawler);

var _crawler_headless = require('../crawler/crawler_headless2');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var naver = 'http://comic.naver.com/webtoon/weekday.nhn';
var google = 'https://www.google.co.kr/search';
var lezin = 'https://www.lezhin.com/ko';

var getText = function getText(text) {
  console.log(text);
};

(0, _crawler_headless.crawler_headless)(lezin, getText);