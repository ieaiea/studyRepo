"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var baseUrl = "http://comic.naver.com";

var todayNaver = exports.todayNaver = function todayNaver($) {
  var title = void 0,
      link = void 0,
      new_text = '';

  var list = $("#content").find(".col_selected").find("li");
  list.each(function (idx) {
    title = $(this).find(".title").text();
    link = baseUrl + $(this).find(".thumb > a").attr("href");
    new_text += title + '\n' + link + '\n';
  });

  return new_text;
};