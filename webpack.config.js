var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var HTMLWebpackPluginConfig = new HtmlWebpackPlugin({
  template: __dirname + '/src/app/index.html',
  filename: 'index.html',
  inject: 'body'
});
var bourbon = require('node-bourbon').includePaths;
var CopyWebpackPlugin = require('copy-webpack-plugin');
var path = require('path');

module.exports = {
  devtool: "source-map",
  devServer: {
    outputPath: path.join(__dirname, 'dist')
  },
  entry: [
    './src/app/index.js',
  ],
  module: {
    loaders: [
      {test: /\.js$/, exclude: /node_modules/, loader: "babel-loader"},
      { test: /\.scss$/, loader: "style!css!sass?includePaths[]=" + bourbon},
      {test: /\.(jpe?g|png|gif|svg)$/i, loader: "file-loader?name=./src/app/public/img/[name].[ext]"},
      { test: /\.jpe?g$|\.gif$|\.png$|\.svg$|\.woff$|\.woff2$|\.eot$|\.ttf$|\.wav$|\.mp3$/, loader: "file" }
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
    new CopyWebpackPlugin([
      { from: './src/public/img/*', to: './'}
    ])
  ],
};