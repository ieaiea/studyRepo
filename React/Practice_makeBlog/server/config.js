import express from 'express';
import path from 'path';
import morgan from 'morgan';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import session from 'express-session';
import api from './routes';

export default function(app){
  app.use('/', express.static(path.join(__dirname, './../public')));
  app.use(morgan('dev')); // http log
  app.use(bodyParser.json()); // json parse middleware
  app.get('/', (req, res) => {return res.send('Hello node.js')});

  mongoose.Promise = global.Promise;
  mongoose.connect('mongodb://appear:appear@ds153412.mlab.com:53412/appear'); // mongo DB
  app.use(session({ // session
    secret : 'Appear$1$234',
    resave : false,
    saveUninitialized : true
  }));

  app.use(express.static(__dirname +'/public'));
  app.use('/api', api);
  // 클라이언트사이드 라우팅을 호환
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, './../public/index.html'));
  });
  app.use(function(err, req, res , next){ // express 에러처리
    console.error(err.stack);
    res.status(500).send('Something broke!');
  });

  return app;
}