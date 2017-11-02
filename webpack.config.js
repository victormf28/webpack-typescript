const path = require('path')
const WebpackUtil = require('./webpack.util.js')
// const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
   entry: WebpackUtil.filesToCompile('./ts/modules', /\/View\.ts$/),
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
      extensions: ['.ts']
   },
   plugins: []
}
