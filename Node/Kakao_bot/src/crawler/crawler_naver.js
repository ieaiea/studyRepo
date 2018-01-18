const baseUrl = "http://comic.naver.com";

export const todayNaver = ($) => {
  let title, link, new_text = '';

  const list = $("#content").find(".col_selected").find("li");
  list.each(function (idx) {
    title = $(this).find(".title").text();
    link = baseUrl + $(this).find(".thumb > a").attr("href");
    new_text += title + '\n' + link + '\n';
  });

  return new_text;
};





