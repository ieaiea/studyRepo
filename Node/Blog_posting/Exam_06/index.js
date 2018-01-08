var express = require('express');
var app = express();
var mongoose = require('mongoose');
var logger = require('morgan');
var bodyParser = require('body-parser');
var path = require('path');
var Board = require('./BoardModel');

app.set('PORT', 5000);

app.use(logger('dev'));
app.use(bodyParser.json());

// mongo db
mongoose.connect('mongodb://appear:appear@ds161455.mlab.com:61455/appear');

var db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
	console.log('Conneted mongoDB');
});


app.get('/', function(req, res){
	Board.find({}).sort({date:-1}).exec(function(err, posts){
		if(err) throw err;
		
		res.send(JSON.stringify(posts));
	});
});

app.post('/', function(req, res){
	var title = req.body.title;
	var author = req.body.author;
	
	var board = new Board();
	board.title = title;
	board.author = author;

	board.save(function (err) {
		if(err) throw err;
		console.log('save post');
	})
});

app.put('/:id', function(req, res){
	var id = req.params.id;
	var title = req.body.title;
	var author = req.body.author;
	
	Board.findOne({_id : id}, function(err, board){
		board.title = title;
		board.author = author;
		
		board.save(function(err){
			if(err) throw err;
			console.log('edit board');
		})
	})
});

app.delete('/:id', function(req, res){
	var id = req.params.id;
	Board.findOneAndRemove({_id : id}, function(err){
		if(err) throw err;
		console.log('remove board');
	})
});

app.listen(app.get('PORT'), function() {
	console.log('Server Run....');
});
