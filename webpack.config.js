var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
    entry: [
        'webpack/hot/dev-server',
        'webpack-dev-server/client?http://localhost:8080',
        path.resolve(__dirname, 'app/index.js')],
    output: {
        path: path.join(__dirname, '/build/'),
		filename: 'bundle.[hash:4].js',
		chunkFilename: 'chunk.[id].[hash:4].js',
		publicPath: '/'
    },
    module: {
        loaders: [
            { 
                test: /\.jsx?$/,        
                exclude: /node_modules/, 
                loader: "babel", 
                query:
                {
                    presets:['es2015','react']
                }
            },
            //.less文件解析
            { test: /\.less$/, loader: ExtractTextPlugin.extract("style-loader","css-loader")}
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'My App',
            filename: 'index.html',
            template: 'index_template.html',
        }),
        new ExtractTextPlugin("styles.[hash:4].css"),
    ]
};