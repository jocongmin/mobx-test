const webpack = require('webpack');
const webpackUglifyJsPlugin = require('webpack-uglify-js-plugin');
const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const config = {
    entry: [
        "webpack-hot-middleware/client?reload=true",
        // 这里是你的入口文件
        "./index.js",
    ],
    output: { //输出目录
        publicPath: "http://0.0.0.0:8087/",
        path: __dirname,
        filename: 'bundle.js',
    },
    module: {
        rules: [{
            test: /\.jsx?$/,
            use: ['react-hot-loader', {
                loader: 'babel-loader',
                options: {
                    presets: ['es2015', 'es2016', 'es2017', 'stage-0', 'react'],
                    plugins: ['transform-decorators-legacy']
                }
            }],
            exclude: /node_modules/
        }, {
            test: /\.scss$/,
            use: ExtractTextPlugin.extract({
                fallback: "style-loader",
                loader: "css-loader!autoprefixer-loader?{browsers:['last 6 Chrome versions', 'last 3 Safari versions', 'iOS >= 5', 'Android >= 4.0']}!sass-loader",
            }),
        }, {
            test: /\.png$/,
            use: {
                loader: 'file-loader',
                options: {
                    name: '../img/[name].[ext]'
                }
            }
        }]
    },
    plugins: [
        new webpack.optimize.OccurrenceOrderPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoEmitOnErrorsPlugin(),
        new ExtractTextPlugin('css/style.css')
        /*new HtmlWebpackPlugin({
            title: 'index',
            hash:true,
            template: 'index.ejs', // Load a custom template (ejs by default see the FAQ for details)
        })*/
    ]
};
module.exports = config;
