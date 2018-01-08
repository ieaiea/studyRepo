const webpack = require('webpack');

const HOST  = 'localhost';
const PORT  = 4000;

module.exports = {
  entry: [
    `webpack-dev-server/client?http://${HOST}:${PORT}`,
    './src/index.js',
  ],
  output: {
    filename: 'bundle.js',
    path: `${__dirname}/public`,
    publicPath: '/',
  },
  devtool: 'cheap-module-eval-source-map',
  devServer: {
    contentBase: './public',
    publicPath: '/',
    compress: true,
    port: PORT,
    proxy : {
      '**' : 'http://localhost:3000'
    },
    stats: {
      chunks: false,
      colors: true,
      hash: false,
      reasons: true,
      timings: true,
      version: false,
      warnings: true
    }
  },
  module: {
    rules: [
       {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "eslint-loader",
      },
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader?cacheDirectory'
      },
      {
        test: /\.scss?$/,
        exclude: /node_modules/,
        loader: 'style-loader!css-loader!sass-loader'
      }
    ]
  },
  resolve: {
    modules: [ __dirname, 'node_modules' ],
    extensions: [ '.js', '.css', '.scss', '.sass' ]
  },
  plugins: []
};