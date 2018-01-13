/*thumb = $(this).find("img").attr("src");*/
import c from '../helper/crawler';
const baseUrl = "https://www.lezhin.com";

export const todayLezhin = ($) => {
  let title, link, new_text = '';

  const list = $(".main .home-todaycomic .homelist-wrap .homelist");
  list.each(function (idx) {
    title = $(this).find(".homelist-title span").text();
    link = baseUrl + $(this).find("a").attr("href");
    new_text += title + '\n' + link + '\n';
  });

  return new_text;
};

c(baseUrl, todayLezhin);




