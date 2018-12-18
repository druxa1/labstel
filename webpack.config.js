/* eslint-disable import/no-extraneous-dependencies */

const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const isDevelopment = !process.env.production;
const isProduction = process.env.production;
const distPath = path.join(__dirname, '..', 'Astral.Feedback.Web', 'wwwroot', 'dist');

const extractSass = new ExtractTextPlugin({
  filename: 'main.css',
  disable: isDevelopment,
});

const config = {
  mode: 'development',
  output: {
    filename: 'index.js',
    publicPath: '/dist/',
  },
  performance: {
    hints: false,
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel-loader',
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.js$/,
        exclude: [/node_modules/],
        use: 'babel-loader',
      }, {
        test: /\.scss$/,
        exclude: [/node_modules/],
        use: extractSass.extract({
          fallback: 'style-loader',
          use: [{
            loader: 'css-loader',
            options: {
              modules: true,
              sourceMap: true,
              importLoaders: 2,
              localIdentName: '[name]__[local]__[hash:base64:5]',
              minimize: isProduction,
            },
          },
          'sass-loader',
          'resolve-url-loader',
          ],
        }),
      }, {
        test: /\.(gif|png|jpe?g|svg)$/i,
        use: [{
          loader: 'file-loader',
          options: {
            name: 'images/[name][hash].[ext]',
          },
        }, {
          loader: 'image-webpack-loader',
          options: {
            outputPath: '/',
            publicPath: '/dist',
            mozjpeg: {
              progressive: true,
              quality: 70,
            },
          },
        },
        ],
      }, {
        test: /\.(woff(2)?|ttf|eot)(\?v=\d+\.\d+\.\d+)?$/,
        use: [{
          loader: 'file-loader',
          options: {
            name: '[name].[ext]',
            outputPath: '/',
            publicPath: '/dist',
          },
        }],
      }],
  },
  plugins: [
    extractSass,
    new HtmlWebpackPlugin({
      template: './src/index.html',
      inject: 'body',
    }),
  ],
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    historyApiFallback: true,
    compress: true,
    open: true,
    port: 9000,
  },
};

module.exports = config;
