import message from '../helper/message';

export const crawlerKeyword = ($) => {
  // text, label, url_button
  const content = $("h3 > a")[0];
  const title = $(content).text();
  const link = $(content).attr("href");

  return message.messageButtonType(title, title, link);
};
