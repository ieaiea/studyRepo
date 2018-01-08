var express = require('express');
var app = express();
var path = require('path');
var fs = require('fs'); // 파일 시스템 추가
var bodyParser = require('body-parser');


app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.get('/', function (req, res) {
	var page = req.query.page; // 이렇게 req(요청 객체)에 query 라는곳에 우리가 보낸 이름 즉 page로 값이 들어있습니다.
	var strArr = ['Javascript', 'Node.js', 'React.js']; // title 를 배열로 만들어서 요청오는 page에 해당하는 값으로 전달해줄거에요
	var category = req.query.category; // category 를 추가했습니다.
	
	res.render('index', {title: strArr[page], category: category});
});

app.get('/todo', function (req, res) { // todo_List 불러오기
	fs.readFile(path.join(__dirname, "data/data.json"), 'utf8', function (err, data) {
		res.send(data);
	});
});

app.get('/todo/:day', function (req, res) {
	fs.readFile(path.join(__dirname, "data/data.json"), 'utf8', function (err, data) {
		var todoList = JSON.parse(data); // json -> object
		res.send(todoList[req.params.day]); // params 에 데이터가 들어있음
	});
});

app.post('/todo', function (req, res) { // post man -> JSON
	fs.readFile(path.join(__dirname, "data/data.json"), 'utf8', function (err, data) {
		var todoList = JSON.parse(data); // json -> object
		todoList = Object.assign({}, todoList, req.body);
		
		fs.writeFile(path.join(__dirname, "data/data.json"),
			JSON.stringify(todoList, null, '\t'), "utf8", function (err, data) {
				res.send(todoList);
			})
	});
});

app.put('/todo/:day', function (req, res) {
	fs.readFile(path.join(__dirname, 'data/data.json'), 'utf8', function (err, data) {
		var todoList = JSON.parse(data);
		if (todoList[req.params.day]) { // 있는 친구인가
			todoList[req.params.day] = req.body;
			
			fs.writeFile(path.join(__dirname, "data/data.json"),
				JSON.stringify(todoList, null, '\t', "utf8", function (err, data) {
					res.send(todoList);
				}))
		}
	});
});

app.delete('/todo/:day', function(req, res){
	fs.readFile(path.join(__dirname, 'data/data.json'), 'utf8', function(err, data){
		var todoList = JSON.parse(data);
		if(todoList[req.params.day]){
			delete todoList[req.params.day];
			
			fs.writeFile(path.join(__dirname, "data/data.json"),
				JSON.stringify(todoList, null, '\t', "utf8", function (err, data) {
					res.send(todoList);
				}))
		}
	});
});

app.listen(3000, function () {
	console.log('Server Run.... 3000');
});