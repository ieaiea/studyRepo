import client from 'cheerio-httpcli';

export default (url, callback, param) => {
  return new Promise((resolve, reject) => {
    client.fetch(url, {q : param ? param : ''}, (err, $, res, body) => {
      if (err) throw err;
      const list = callback($, body);
      if (err) { return reject(err); }
      resolve(list);
    });
  })
};