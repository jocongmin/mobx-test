var webpack = require('webpack');
var webpackUglifyJsPlugin = require('webpack-uglify-js-plugin');
const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');

const config = {
    entry: {
        app: ["./index.js"]
    },
    output: { //输出目录
        path: __dirname,
        publicPath: "",
        filename: 'bundle.js',
    },
    module: {
        rules: [{
            test: /\.jsx?$/,
            use: {
                loader: 'babel-loader',
                options: {
                    presets: ['es2015', 'es2016', 'es2017', 'stage-0', 'react'],
                    plugins: ['transform-decorators-legacy']
                }
            },
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
        new webpackUglifyJsPlugin({
            cacheFolder: path.resolve(__dirname, 'public/cached_uglify/'),
            debug: true,
            minimize: true,
            sourceMap: false,
            output: {
                comments: false
            },
            compressor: {
                warnings: false
            }
        }),
        new webpack.HotModuleReplacementPlugin(),
        new ExtractTextPlugin('css/style.css')
        /*new HtmlWebpackPlugin({
            title: 'index',
            hash:true,
            template: 'index.ejs', // Load a custom template (ejs by default see the FAQ for details)
        })*/
    ]
};
module.exports = config;
