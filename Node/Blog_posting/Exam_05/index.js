var express = require('express');
var app = express();
var path = require('path');
var logger = require('morgan');
var bodyParser = require('body-parser');
var mysql = require('mysql');

app.set('PORT', 3000);

app.use(express.static(path.join(__dirname, '../public')));
app.use(logger('dev')); // http logger
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

var pool = mysql.createPool({
  host : 'localhost',
  user : 'appear', // user name
  database : 'board', // 사용중인 데이터베이스공간
  password : 'appear' // user password
});

// router
app.get('/', function(req, res){
  pool.getConnection(function(err, conn){
    var selectListQuery = "SELECT * FROM board";
    conn.query(selectListQuery, function(err, row){
      if(err) console.error(err);
      res.send(JSON.stringify(row));
      conn.release();
    });
  });
});

app.post('/', function(req, res){
  const title = req.body.title;
  const author = req.body.author;
  const content = req.body.content;
  const datas = [title, author, content];

  pool.getConnection((err, conn) => {
    const insertQuery = "INSERT INTO board(title, author, content) values(?, ?, ?)";
    conn.query(insertQuery, datas, (err, row) => {
      if(err) console.error(err);
      res.send(JSON.stringify(row));
      conn.release();
    });
  });
});

app.put('/:id', function(req, res){
  var id = req.params.id;
  var title = req.body.title;
  var content = req.body.content;
  var datas = [title, content, id];

  pool.getConnection(function(err, conn){
    var updateQuery = "UPDATE board SET title = ?, content = ? WHERE id = ?";
    conn.query(updateQuery, datas, function(err, row){
      if(err) console.error(err);
      res.send(JSON.stringify(row));
      conn.release();
    })
  })
});

app.delete('/:id', function(req, res){
  var id = req.params.id;
  pool.getConnection(function(err, conn){
    var selectOne = "DELETE FROM board WHERE id = ?";
    conn.query(selectOne, id, function(err, row){
      if(err) console.error(err);
      res.send(JSON.stringify(row));
      conn.release();
    })
  })
});

app.listen(app.get('PORT'), function(){
  console.log('Server start.. ', app.get('PORT'));
});