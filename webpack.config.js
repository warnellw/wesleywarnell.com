const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackIncludeAssetsPlugin = require('html-webpack-include-assets-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const MergeIntoSingleFilePlugin = require('webpack-merge-and-include-globally');
const CleanCSS = require('clean-css');

module.exports = {
  module: {
    rules: [
      { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader" }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'src/index.html',
      title: 'Wesley Warnell',
      meta: {
        description: 'Wesley Warnell - Software Developer',
        viewport: 'width=device-width, initial-scale=1, shrink-to-fit=no'
      },
      hash: true,
      minify: { collapseWhitespace: true }
    }),
    new HtmlWebpackIncludeAssetsPlugin({
      assets: ['assets/css/main.css'],
      append: true,
      hash: true
    }),
    new CopyWebpackPlugin([{
      from: 'src/assets',
      to: 'assets',
      ignore: [ '*.css' ]
    }]),
    new MergeIntoSingleFilePlugin({
      files: {
        'assets/css/main.css': [
          'src/assets/css/normalize.css',
          'src/assets/css/fontawesome-all.css',
          'src/assets/css/global.css'
        ]
      },
      transform: {
        'assets/css/main.css': code => new CleanCSS({level:2}).minify(code).styles
      }
    }),
  ]
}