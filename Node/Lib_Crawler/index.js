const read = require('read');
const Seq = require('seq');
const crawler = require('./crawler');

let promise = new Promise((resolve, reject) => {
  resolve(true);
});

Seq()
  .seq(function () {
    read({prompt: '찾으시는 라이브러리의 이름은 뭔가요?'}, this.into('query'));
  })
  .seq(function () {
    read({prompt: '메이븐인가요 그래들인가요? 1.Maven 2.Gradle'}, this.into('number'));
  })
  .seq(function () {
    promise = promise.then(() => crawler.run(this.vars.query))
      .then((link) => crawler.parse(link))
      .then((list, link) => crawler.print(list, link))
      .then((list, link) => {
        return new Promise((resolve, reject) => {
          read({prompt: '버전을 선택해주세요'}, this.into('version'));
          resolve(list, link);
        })
      })
  })
  .seq(function () {
    promise
      .then(({list, link}) => crawler.getUrl(list, this.vars.version, link))
      .then((link) => crawler.result(link, this.vars))
      .catch((err) => console.log(err));
  });


