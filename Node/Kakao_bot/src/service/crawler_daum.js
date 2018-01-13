const baseUrl = `http://webtoon.daum.net/webtoon/view/`;

export const todayDaum = ($, body) => {
  let title, link, new_text = '';
  const data = JSON.parse(body);

  data["data"].forEach((webtoon) => {
    title = webtoon.title;
    link = baseUrl + webtoon.nickname;
    new_text += title + '\n' + link + '\n';
  });

  return new_text;
};




