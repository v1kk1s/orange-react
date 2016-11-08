var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var HTMLWebpackPluginConfig = new HtmlWebpackPlugin({
  template: __dirname + '/src/app/index.html',
  filename: 'index.html',
  inject: 'body'
});
var bourbon = require('node-bourbon').includePaths;

module.exports = {
  devtool: "source-map",
  entry: [
    './src/app/index.js',
  ],
  module: {
    loaders: [
      {test: /\.js$/, exclude: /node_modules/, loader: "babel-loader"},
      { test: /\.scss$/, loader: "style!css!sass?includePaths[]=" + bourbon},
      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        loaders: [
          'url?limit=8192',
          'img'
        ]
      },
    ]
  },
  output: {
    filename: 'index_bundle.js',
    path: __dirname + '/dist',
    css: 'main.css'
  },
  sassLoader: {
    includePaths: [ './src/app/scss' ]
  },
  plugins: [
    HTMLWebpackPluginConfig,
    new ExtractTextPlugin("main.css"),
  ],
};