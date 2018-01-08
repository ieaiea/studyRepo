import express from 'express';
import config from './config';

let app = express();

// Dev Server
import WebpackDevServer from 'webpack-dev-server';
import webpack from 'webpack';

const devPort = 4000;

if (process.env.NODE_ENV == 'development') {
  console.log('Server is running on development mode');
  const config = require('../webpack.dev.config');
  const compiler = webpack(config);
  const devServer = new WebpackDevServer(compiler, config.devServer);
  devServer.listen(devPort, () => {
    console.log('webpack-dev-server is listening on port', devPort);
  })
}

app = config(app);
app.set('port', process.env.PORT || 3000);

app.listen(app.get('port'), () => {
  console.log('Server on .....', app.get('port'));
});