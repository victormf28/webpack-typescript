const path = require('path');
const WebpackUtil = require('./webpack.util.js');

module.exports = {
  entry: WebpackUtil.filesToCompile(),
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist')
},
   module: {
     rules: [
        {
          test: /\.js$/,
          loaders: ['babel-loader'],
          exclude: /node_modules/
        }
     ]
   }
}
