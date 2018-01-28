import message from '../model/message';
import {todayNaver} from '../crawler/crawler_naver';
import {todayDaum} from '../crawler/crawler_daum';
import {todayLezin} from '../crawler/crawler_lezhin';
import {crawlerGoogle} from '../crawler/crawler_google';
import use_crawler from '../crawler/crawler';

const naver = 'http://comic.naver.com/webtoon/weekday.nhn';
const google = 'https://www.google.co.kr/search';
const lezin = 'https://www.lezhin.com/ko';

const service = (req, content, callback) => {
  switch (content) {
    case message.buttons[0] : // 직접
      callback(null, message.baseText("검색결과는 google 검색을 바탕으로 이뤄집니다."));
      break;
    case message.buttons[1] : // 네이버
      use_crawler(naver, todayNaver, callback, message.baseType);
      break;
    case message.buttons[2] : // 다음
      const today = String(new Date).split(" ")[0].toLowerCase();
      const daum = `http://webtoon.daum.net/data/pc/webtoon/list_serialized/${today}?timeStamp=1515819276574`;
      use_crawler(daum, todayDaum, callback, message.baseType);
      break;
    case message.buttons[3] : // 레진
      break;
    default :
      use_crawler(google, crawlerGoogle, callback, message.messageButtonType, `웹툰 ${content}`)
  }
};

export default service;