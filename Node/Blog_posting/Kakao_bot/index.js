import express from 'express';
import bodyParser from 'body-parser';
import logger from 'morgan';
import message from './message';

let app = express();

app.set('PORT', 8080);
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/keyboard', (req, res) => {
  res.set({
    'content-type': 'application/json'
  }).send(JSON.stringify(message.buttonsType()));
});

app.post('/message', checkUserKey, (req, res) => {
  const _obj = {
    user_key: req.body.user_key, // 유저키
    type: req.body.type,
    content: req.body.content // 눌린 버튼 또는 텍스트
  };
});


app.listen(app.get('PORT'), () => {
  console.log(`server start... port : ${app.get('PORT') }`);
});


