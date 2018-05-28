'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var puppeteer = require('puppeteer');

var crawler_headless = async function crawler_headless(url, callback) {
  var title = void 0,
      link = void 0;
  var browser = await puppeteer.launch({});
  var page = await browser.newPage();
  page.on('console', console.log);

  await page.goto(url);
  await page.screenshot({ path: 'example.png' });

  var list = await page.evaluate(function () {
    var context = Array.from(document.querySelectorAll('.home-todaycomic li'));
    var new_text = '';

    context.forEach(function (webtoon) {
      title = webtoon.querySelector(".homelist-title span").textContent;
      link = webtoon.querySelector("a").getAttribute("href");
      new_text += title + '\n' + link + '\n';
    });
    return new_text;
  });
  callback(list);
  await browser.close();
};

var use_headless = exports.use_headless = function use_headless(url, callback, messageType) {
  crawler_headless(url, function (text) {
    callback(null, messageType(text));
  }).then(function () {
    console.log('ok');
  });
};