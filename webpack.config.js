const path = require('path')
const WebpackUtil = require('./webpack.util.js')
const HtmlWebpackPlugin = require('html-webpack-plugin')

console.log('WebpackUtil.filesToCompile()', WebpackUtil.filesToCompile())

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
      extensions: ['.ts']
      // alias: {
      //    'utils': path.resolve(__dirname, './webpack.globals')
      //  }
   },
   plugins: [
      new HtmlWebpackPlugin({
         // inject: false,
         chunks: ['ts/modules/ficha/nuevo'],
         filename: 'apps/page1/build/index.html'
      }),
      new HtmlWebpackPlugin({
         // inject: false,
         chunks: ['ts/modules/ficha/usado'],
         filename: 'apps/page2/build/index.html'
      })
   ]
}
