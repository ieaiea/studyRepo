const express = require('express');
const app = express();
const routes = require('./routes');
const errorHandlers = require('./middleware/errorhandlers');
const log = require('./middleware/logger');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const RedisStore = require('connect-redis')(session);
const bodyParser = require('body-parser');
const csrf = require('csurf');
const util = require('./middleware/utilities');
const partial = require('express-partials');

app.set('PORT', 3000);
app.set('view engine', 'ejs');

app.use(log.logger);
app.use(express.static(__dirname + '/static'));
app.use(cookieParser('secret'));
app.use(session({
  secret : 'secret',
  saveUninitialized : true,
  resave : true,
  store : new RedisStore(
    { url : 'redis://127.0.0.1:6379'}
  )
}));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended : false}));
app.use(csrf());
app.use(util.csrf);
app.use(util.authenticated);
app.use(partial());

app.get('/', routes.index);
app.get('/login', routes.login);
app.post('/login', routes.loginProcess);
app.get('/chat', [util.requireAuthentication], routes.chat);
app.get('/logout', routes.logout);

// Error
app.use(errorHandlers.notFound);
app.use(errorHandlers.error);

app.listen(app.get('PORT'), () => {
  console.log('server start');
});