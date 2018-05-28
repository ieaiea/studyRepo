'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _cheerioHttpcli = require('cheerio-httpcli');

var _cheerioHttpcli2 = _interopRequireDefault(_cheerioHttpcli);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var crawler = function crawler(url, callback, param) {
  return new Promise(function (resolve, reject) {
    _cheerioHttpcli2.default.fetch(url, { q: param ? param : '' }, function (err, $, res, body) {
      if (err) throw err;
      var list = callback($, body);
      if (err) {
        return reject(err);
      }
      resolve(list);
    });
  });
};

var use_crawler = function use_crawler(url, crawler_name, callback, messageType, query) {
  crawler(url, function ($, body) {
    return crawler_name($, body);
  }, query).then(function (res) {
    callback(null, messageType(res));
  });
};

exports.default = use_crawler;