const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {

  mode: 'development',
  entry: './src/index.js',
  devServer: {
    static: './dist',
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,

  entry: './src/index.js',
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist'),
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
    }),
  ],


  devServer: {
    static: './dist',
  },

  module: {
    rules: [
      {
        test: /\.css$/i,

        use: [
          'style-loader',
          'css-loader',
        ],

        use: ['style-loader', 'css-loader'],

      },
    ],
  },
  optimization: {
    runtimeChunk: 'single',
  },
};