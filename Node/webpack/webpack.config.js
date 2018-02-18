const webpack = require('webpack');
const path = require('path');

module.exports = {
  entry: path.resolve(__dirname, 'src/index.js'),
  output: {
    filename: 'bundle.js', // bundle.js 라는 이름의 파일로 번들링해줍니다.
    path: path.resolve(__dirname, 'dist'), // dist라는 폴더에 파일을 만들어줍니다.
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      }
    ]
  },
  resolve: {
    modules: [ __dirname, 'node_modules' ],
    extensions: [ '.js', '.css', '.scss', '.sass' ]
  },
  plugins: [
    new webpack.NoEmitOnErrorsPlugin(), // 오류가 발생하면 해당 모듈을 건너뜁니다.
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        unused: true
      },
      mangle: true,
      beautify: false,
      output: {
        comments: false
      }
    })
  ]
};