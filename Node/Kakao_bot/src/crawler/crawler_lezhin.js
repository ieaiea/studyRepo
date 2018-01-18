/*
const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  let title, link;
  let new_text = '';

  await page.goto('https://www.lezhin.com/ko');
  await page.waitForSelector('#home-todaycomic');

  await page.evaluate(() => {
    const list = Array.from(document.querySelectorAll('.home-todaycomic li'));

    list.forEach((webtoon) => {
      title = webtoon.querySelector(".homelist-title span").textContent;
      link = webtoon.querySelector("a").getAttribute("href");
      console.log(title);
      /!*new_text += title + '\n' + link + '\n';*!/
    });
  });

  browser.close();
})();

*/
