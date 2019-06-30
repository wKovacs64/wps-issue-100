const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const convert = require('koa-connect');
const history = require('connect-history-api-fallback');

const mode = process.env.NODE_ENV || 'production';

const publicPath = '/admin/';

const devServerOpts = {
  port: 8000,
  hotClient: true,
  devMiddleware: {
    publicPath,
  },
  add: app => {
    app.use(convert(history({ index: publicPath })));
  },
};

module.exports = {
  mode,
  serve: devServerOpts,
  entry: {
    app: [path.resolve('src/index.js')],
  },
  output: {
    publicPath,
  },
  optimization: {
    splitChunks: {
      chunks: 'all',
    },
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: 'babel-loader',
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve('src/index.html'),
      chunksSortMode: 'dependency',
      inject: 'body',
    }),
  ],
};
