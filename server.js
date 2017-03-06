var config = require("./webpack.start.js");
var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');

var compiler = webpack(config);
var server = new WebpackDevServer(compiler, {
    publicPath: config.output.publicPath,
    stats: {
        host:'0.0.0.0',
        colors: true,
        hot:true,
        progress:true,
    }
});
server.listen(8087);
