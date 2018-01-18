import client from 'cheerio-httpcli';

const crawler = (url, callback, param) => {
  return new Promise((resolve, reject) => {
    client.fetch(url, {q : param ? param : ''}, (err, $, res, body) => {
      if (err) throw err;
      const list = callback($, body);
      if (err) { return reject(err); }
      resolve(list);
    });
  })
};

const use_crawler = (url, crawler_name, callback, messageType, query) => {
  crawler(url, ($, body) => crawler_name($, body), query).then((res) => {
    callback(null, messageType(res));
  });
};

export default use_crawler;