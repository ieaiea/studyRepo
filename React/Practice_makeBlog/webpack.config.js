const webpack = require('webpack');

module.exports = {
  entry: [
    './src/index.js'
  ],
  output: {
    filename: 'bundle.js',
    path: `${__dirname}/public`,
    publicPath: '/',
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
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin(),
    new webpack.EvalSourceMapDevToolPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        // warnings: false, // 콘솔 창에 출력되는 게 보기 귀찮다면 요 놈을 주석 제거하면 된다.
        unused: true // 요 놈이 핵심
      },
      mangle: true,    // DEMO ONLY: Don't change variable names.(난독화)
      beautify: false,   // DEMO ONLY: Preserve whitespace (가독성 좋게 함)
      output: {
        comments: false  // DEMO ONLY: Helpful comments (주석 삭제 안 함)
      }
    }),
    new webpack.LoaderOptionsPlugin({
      minimize: true,
    })
  ]
};