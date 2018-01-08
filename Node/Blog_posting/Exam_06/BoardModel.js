var mongoose = require('mongoose');

var board = new mongoose.Schema({ // 틀
	title : String,
	author : String,
	date : {type: Date, default: Date.now}
});

module.exports = mongoose.model('Board', board); // 실제 사용