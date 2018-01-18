export const crawlerGoogle = ($) => {
  // text, label, url_button
  const content = $("h3 > a")[0];
  const text = $(content).text();
  const url = $(content).attr("href");

  return {text, label : text, url};
};
