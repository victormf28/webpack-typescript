const path = require('path');
const webpack = require('webpack');
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
            test: /\.ts$/,
            enforce: 'pre',
            loader: 'tslint-loader',
            exclude: /node_modules/,
            options: {
               error: false,
               parser: 'typescript-eslint-parser'
             }
         },
         {
            test: /\.tsx?$/,
            loader: 'ts-loader'
         }
      ]
   },
   resolve: {
      modules: [path.resolve(__dirname, 'ts'), 'node_modules'],
      extensions: ['.ts'],
      // alias: {
      //    'utils': path.resolve(__dirname, './webpack.globals')
      //  }
   },
   plugins: [
      new webpack.ProvidePlugin({
         $: "jquery",
         jQuery: "jquery"
      })
   ]  
}
