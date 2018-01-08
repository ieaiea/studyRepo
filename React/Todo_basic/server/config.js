import express from 'express';
import path from 'path';
import morgan from 'morgan';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';

export default (app) => {
	app.use('/', express.static(path.join(__dirname, './../public')));
	app.use(morgan('dev'));
	app.use(bodyParser.json());
	
	app.get('*', (req, res) => {
		res.sendFile(path.resolve(__dirname, './../public/index.html'));
	});
	// express 에러처리
	app.use(function (err, req, res, next) {
		console.error(err.stack);
		res.status(500).send('Something broke!');
	});
	return app;
}