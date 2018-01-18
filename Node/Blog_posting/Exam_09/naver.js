var client = require('cheerio-httpcli');

client.fetch("http://comic.naver.com/webtoon/weekday.nhn", {}, function (err, $, res, body) {
  var list = $(".list_area .col_selected li");

  list.each(function(){
    console.log($(this).find(".title").text());
  });
});