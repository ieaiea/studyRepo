const webpack = require('webpack');

module.exports = {
  entry: [
    './main.js'
  ],
  output: {
    filename: 'bundle.js',
    path: `${__dirname}/public`,
    publicPath: '/',
  },
  module: {
    rules: [
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
  plugins: [
    new webpack.NamedModulesPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        unused: true
      },
      mangle: true,
      beautify: false,
      output: {
        comments: false
      }
    }),
    new webpack.LoaderOptionsPlugin({
      minimize: true,
    })
  ]
};