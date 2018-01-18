var client = require('cheerio-httpcli');

var today = String(new Date).split(" ")[0].toLowerCase();
var daum = "http://webtoon.daum.net/data/pc/webtoon/list_serialized/" + today + "?timeStamp=1515819276574";

client.fetch(daum, {}, function (err, $, res, body) {
  var data = JSON.parse(body);
  var list = data["data"];

  list.forEach(function(item, idx){
    console.log(item.title);
  });
});