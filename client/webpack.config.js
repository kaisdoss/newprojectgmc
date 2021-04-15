const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

module.exports = {
  entry: ['react-hot-loader/patch', path.resolve(__dirname, 'src', 'index.js')],
  output: { path: path.resolve(__dirname, 'dist') },
  mode: 'development',
  module: {
    rules: [
      { test: /\.jsx?$/, exclude: /node_modules/, loader: 'babel-loader' },
      { test: /\.css$/, loader: 'css-loader' },
    ],
  },
  devtool: 'eval-source-map',
  resolve: {
    alias: {
      'react-dom': '@hot-loader/react-dom',
    },
  },
  devServer: {
    historyApiFallback: true,
    port: 3000,
    hot: true,
    open: true
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'src', 'index.html'),
      inject: 'body',
    }),
    new webpack.HotModuleReplacementPlugin(),
  ],
};
