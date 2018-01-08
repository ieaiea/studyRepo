import express from 'express';
import config from './config';

let app = express();
// dev server
const DEV_PORT = 4000;
const PORT = 3000;

import WebpackDevServer from 'webpack-dev-server';
import webpack from 'webpack';

if (process.env.NODE_ENV == 'dev') {
	console.log('Server is running on dev mode');
	const config = require('../webpack.dev.config.js');
	const compiler = webpack(config);
	const devServer = new WebpackDevServer(compiler, config.devServer);
	devServer.listen(DEV_PORT, () => {
		console.log('webpack-dev-server is listening on port', DEV_PORT);
	})
}

app = config(app);
app.set('port', process.env.PORT || 3000);

app.listen(app.get('port'), () => {
	console.log('Server on .....', app.get('port'));
});