'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var puppeteer = require('puppeteer');

var crawler_headless = async function crawler_headless(url, callback) {
  var browser = await puppeteer.launch({});
  var page = await browser.newPage();
  page.on('console', console.log);

  await page.goto(url);
  await page.screenshot({ path: 'example.png' });
  var list = await callback(page);

  await browser.close();
  return list;
};

var getText = function getText(text) {
  return text;
};

var use_headless = exports.use_headless = function use_headless(url, crawler_name, callback, messageType) {
  crawler_headless(url, getText).then(function () {});
};