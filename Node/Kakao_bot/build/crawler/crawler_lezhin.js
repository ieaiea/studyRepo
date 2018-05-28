'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var puppeteer = require('puppeteer');

var todayLezin = exports.todayLezin = async function todayLezin(url, callback) {
  var title = void 0,
      link = void 0;
  var browser = await puppeteer.launch({});
  var page = await browser.newPage();
  page.on('console', console.log);

  await page.goto(url);

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
  console.log(list);
  console.log('test');
  callback(list);
  await browser.close();
};