const express = require('express');
const path = require('path');
const favicon = require('serve-favicon');
const logger = require('morgan');
const cokieParser = require('cookie-parser');
const bodyParser = require('body-parser');

// 라우터
const routes = require('./routes');

const app = express();
const env = process.env.NODE_ENV || 'develpment';

app.locals.ENV = env;
app.locals.ENV_DEVELOPMENT = env == 'develpment';

// view
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(cokieParser());
app.use(express.static(path.join(__dirname, 'public')));

// 라우터
app.use('/', routes);
app.use((req, res, next) => {
	const err = new Error('Not Found');
	err.status = 404;
	next(err);
});

// 에러처리
if(app.get('env') === 'develpment'){
	app.use((err, req, res, next) => {
		res.status(err.status || 500);
		res.render('error', {
			message : err.message,
			error : err,
			title : 'error'
		})
	})
}

// 포트설정
app.set('port', process.env.PORT || 3000);
const server = app.listen(app.get('port'), () => {
	console.log('Server Start ...', app.get('port'));
});

// 소켓 설정
const io = require('socket.io').listen(server);
// 사용자 저장 배열
const userList = [];
// 연결을 저장
const connections = [];

io.sockets.on('connection', (socket) => {
	connections.push(socket);
	console.log('Connected', connections.length);

	// 유저 리스트
	const updataUsernames = () => {
		io.sockets.emit('get userList', userList);
	};

	// 연결 끊기
	socket.on('disconnect', (data) => {
		if(socket.username){
			userList.splice(userList.indexOf(socket.username), 1);
			updataUsernames();
		}
		connections.splice(connections.indexOf(socket), 1);
		console.log('Disconnected', connections.length);
	});
	// 새 메세지
	socket.on('send message', (data) => {
		io.sockets.emit('new message', {msg: data, user: socket.username});
	});
	// 새 사용자
	socket.on('new user', (data, callback) => {
		callback(!!data);
		socket.username = data;
		userList.push(socket.username);
		updataUsernames();
	});
});
