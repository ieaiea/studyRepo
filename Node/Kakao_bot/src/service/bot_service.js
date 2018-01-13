import message from '../helper/message';
import {todayNaver} from './crawler_naver';
import {todayDaum} from './crawler_daum';
import crawler from '../helper/crawler';

const bot = {};

bot.selectMenu = (req, content, callback) => {
  switch (content) {
    // 네이버
    case message.buttons[0] :
      const naver = "http://comic.naver.com/webtoon/weekday.nhn";
      crawler(naver, ($) => todayNaver($)).then((res) => {
        console.log('naver res', res);
        callback(null, res);
      });
      break;
    // 다음
    case message.buttons[1] :
      const today = String(new Date).split(" ")[0].toLowerCase();
      const daum = `http://webtoon.daum.net/data/pc/webtoon/list_serialized/${today}?timeStamp=1515819276574`;
      crawler(daum, ($, body) => todayDaum($, body)).then((res) => {
        console.log('daum res', res);
        callback(null, res);
      });
      break;
    // 직접검색
  }
};

export default bot;