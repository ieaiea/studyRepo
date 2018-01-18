var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var logger = require('morgan');

app.set('PORT', 8080);

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.get('/keyboard', function(req, res){
  res.set({
    'content-type': 'application/json'
  }).send(JSON.stringify({
      type: 'buttons',
      buttons: ['메뉴1', '메뉴2', '메뉴3']
    }));
});

app.post('/message', function(req, res){
  const _obj = {
    user_key: req.body.user_key,
    type: req.body.type,
    content: req.body.content
  };

  res.set({
    'content-type': 'application/json'
  }).send(JSON.stringify(
    {
      message: {
        text: _obj.content,
      },
      keyboard: {
        type: 'buttons',
        buttons: ['메뉴1', '메뉴2', '메뉴3']
      }
    }
  ));
});

app.listen(app.get('PORT'), function(){
  console.log("server start... port :" + app.get('PORT'));
});

