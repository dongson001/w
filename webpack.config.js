var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: [
        'webpack/hot/dev-server',
        'webpack-dev-server/client?http://localhost:8080',
        path.resolve(__dirname, 'app/index.js')],
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'bundle.js',
    },
    module: {
        loaders: [
            {
                test: /\.(js|jsx)$/, // 用正则来匹配文件路径，这段意思是匹配 js 或者 jsx
                loader: 'babel' // 加载模块 "babel" 是 "babel-loader" 的缩写
            }
        ]
    },
    plugins: [new HtmlWebpackPlugin({
      title: 'My App',
      filename: 'index.html',
      template: 'index_template.html',
    })]
};