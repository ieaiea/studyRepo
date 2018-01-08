import express from 'express';
import path from 'path';
import morgan from 'morgan';
import bodyParser from 'body-parser';
import WebpackDevServer from 'webpack-dev-server';
import webpack from 'webpack';

export default (app) => {
  // dev server
  const DEV_PORT = 4000;

  if (process.env.NODE_ENV == 'dev') {
    console.log('Server is running on dev mode');
    const config = require('../webpack.dev.config.js');
    const compiler = webpack(config);
    const devServer = new WebpackDevServer(compiler, config.devServer);
    devServer.listen(DEV_PORT, () => {
      console.log('webpack-dev-server is listening on port', DEV_PORT);
    })
  }

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