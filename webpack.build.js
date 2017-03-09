const webpack = require('webpack');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const developConfig = require('./webpack.start.js');
const WebpackDelPlugin = require('webpack-del-plugin');
const baseUrl = __dirname;
const config = {
    entry: {
        app: ['./index.js']
    },
    output: { //输出目录
        path: __dirname + "/dist",
        publicPath: "",
        filename: '/js/bundle[hash].js',
    },
    module: {
        rules: [{
            test: /\.jsx?$/,
            use: [{
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
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': '"production"'
        }),
        new webpack.optimize.UglifyJsPlugin({
            output: {
                comments: false,
            },
            compress: {
                warnings: false
            }
        }),
        new WebpackDelPlugin({ match: path.join(baseUrl, '/dist') }),
        new HtmlWebpackPlugin({
            title: 'index',
            hash: false,
            template: 'index.ejs',
            files: {
                "css": ["style.css"]
            }
        }),
        new ExtractTextPlugin('css/style[hash].css'),
        new CopyWebpackPlugin([
            { from: baseUrl + '/test.js', to: baseUrl + '/dist/test.js' },
            { from: baseUrl + '/img', to: baseUrl + '/dist/img' },
        ]),
    ]
};
module.exports = config;
