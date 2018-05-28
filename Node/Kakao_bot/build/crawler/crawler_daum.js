'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var baseUrl = 'http://webtoon.daum.net/webtoon/view/';

var todayDaum = exports.todayDaum = function todayDaum($, body) {
  var title = void 0,
      link = void 0,
      new_text = '';
  var data = JSON.parse(body);

  data["data"].forEach(function (webtoon) {
    title = webtoon.title;
    link = baseUrl + webtoon.nickname;
    new_text += title + '\n' + link + '\n';
  });

  return new_text;
};