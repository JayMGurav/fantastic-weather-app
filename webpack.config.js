let webpack = require('webpack')
let path = require('path')
module.exports = {
  entry: path.resolve(__dirname, 'app'),
  output: {
    path: __dirname + '/dist',
    publicPath: '/',
    filename: 'bundle.js'
  },
//    plugins: [
// +     // new CleanWebpackPlugin(['dist/*']) for < v2 versions of CleanWebpackPlugin
// +     new CleanWebpackPlugin(),
// +     new HtmlWebpackPlugin({
// +       title: 'Production'
// +     })
// +   ],
  devServer: {
    contentBase: path.resolve(__dirname, 'public')
  },
  module: {
    rules: [
      {test: /\.js$/, exclude: /node_modules/, loaders: ['babel-loader']},
      {test: /(\.css)$/, loaders: ['style-loader', 'css-loader']},
      {test: /\.(png|svg|jpg|gif)$/,use: ['file-loader']}
    ]
  }
}