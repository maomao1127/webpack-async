const path = require('path')
const packagejson = require('./package')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const webpack = require('webpack')

module.exports = {
  entry: {
    'main': './src/main.js',
    'util': Object.keys(packagejson.dependencies)
  },
  output: {
    path: path.resolve('./dist'),
    filename: '[name].js'
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      name: 'util',
      filename: '[name].js'
    }),
    new HtmlWebpackPlugin({
      template: './src/index.html',//拷贝对象
      chunks: ['util', 'main'],//当有多个入口文件的时候，打包后会对应多个文件，chunks指明你要把哪些打包文件注入html中，以及其顺序
      inject: true
    })
  ]
}
