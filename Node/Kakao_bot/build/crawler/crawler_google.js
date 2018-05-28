"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var crawlerGoogle = exports.crawlerGoogle = function crawlerGoogle($) {
  // text, label, url_button
  var content = $("h3 > a")[0];
  var text = $(content).text();
  var url = $(content).attr("href");

  return { text: text, label: text, url: url };
};