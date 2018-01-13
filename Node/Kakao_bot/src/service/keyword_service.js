import {sendMessage} from '../helper/helper';
import message from '../helper/message';
import crawler from '../helper/crawler';
import crawlerKeyword from './crawler_keyword';

export default (res, keyword) => {
  console.log('넘어온 키워드', keyword);

  switch (keyword) {
    case "직접검색할래요" :
      sendMessage(res, JSON.stringify(message.buttonsType("그려그려 직접해봐 ~")));
      break;
    default :
      const baseUrl = `https://www.google.co.kr/search?q=${keyword}&oq=${keyword}`;
      crawler(baseUrl, ($, body) => crawlerKeyword($, body)).then((result) => {
        console.log('직접검색 결과', result);
        sendMessage(res, JSON.stringify(result));
      });
  }
}