const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { WebpackPluginServe } = require('webpack-plugin-serve');

const mode = process.env.NODE_ENV || 'production';

const publicPath = '/admin/';

const devServerOpts = {
  port: 8000,
  hmr: true,
  static: 'dist', // webpack default output path
  historyFallback: { index: publicPath }, // does not work as expected
};

module.exports = {
  mode,
  serve: devServerOpts,
  entry: {
    app: [path.resolve('src/index.js'), 'webpack-plugin-serve/client'],
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
    new WebpackPluginServe(devServerOpts),
  ],
  watch: true,
};
