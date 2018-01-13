import express from 'express';
import routes from './routes/index';
import bodyParser from 'body-parser';
import logger from 'morgan';

let app = express();

app.set('PORT', 8080);

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/', routes);

app.listen(app.get('PORT'), () => {
  console.log(`server start... port : ${app.get('PORT') }`);
});


