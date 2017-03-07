var webpack = require('webpack');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var CopyWebpackPlugin = require('copy-webpack-plugin');
var developConfig=require('./webpack.start.js');
const config = {
    entry: {
        app: ["./index.js"]
    },
    output: { //输出目录
        path: __dirname + './dist/',
        publicPath: "",
        filename: 'bundle.js',
    },
    module: developConfig.module,
    plugins: [
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: JSON.stringify('production'),
            },
        }),
        new webpack.optimize.UglifyJsPlugin({
            output: {
                comments: false,
            },
            compress: {
                warnings: false
            }
        }),
        new ExtractTextPlugin('css/style.css'),
        new CopyWebpackPlugin([
            // {output}/file.txt
            { from: __dirname + '/bundle.js', to: __dirname + '/dist' },
            { from: __dirname + '/scss', to: __dirname + '/dist/scss' },
            { from: __dirname + '/img', to: __dirname + '/dist/img' },
            { from: __dirname + '/index.html', to: __dirname + '/dist/index.html' },
        ]),
        /*new HtmlWebpackPlugin({
            title: 'index',
            hash:true,
            template: 'index.ejs', // Load a custom template (ejs by default see the FAQ for details)
        })*/
    ]
};
module.exports = config;
