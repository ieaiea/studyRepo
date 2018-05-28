const puppeteer = require('puppeteer');

export const todayLezin = async (url, callback) => {
  let title, link;
  const browser = await puppeteer.launch({});
  const page = await browser.newPage();
  page.on('console', console.log);

  await page.goto(url);

  const list = await page.evaluate(() => {
    const context = Array.from(document.querySelectorAll('.home-todaycomic li'));
    let new_text = '';

    context.forEach((webtoon) => {
      title = webtoon.querySelector(".homelist-title span").textContent;
      link = webtoon.querySelector("a").getAttribute("href");
      new_text += title + '\n' + link + '\n';
    });
    return new_text;
  });
  console.log(list);
  console.log('test');
  callback(list);
  await browser.close();
};


