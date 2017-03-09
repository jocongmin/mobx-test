var webpack = require('webpack'),
    webpackDevMiddleware = require('webpack-dev-middleware'),
    webpackHotMiddleware = require('webpack-hot-middleware'),
    config = require("./webpack.start.js"),
    express = require('express'),
    app = express(),
    compiler = webpack(config);
app.use(webpackDevMiddleware(compiler, {
    publicPath: config.output.publicPath,
    noInfo: true,
    stats: {
        colors: true,
        progress: true
    }
}));
app.use(webpackHotMiddleware(compiler, {
    noInfo: true,
    publicPath: config.output.publicPath
}));

app.get('/', function(req, res) {
  res.sendFile(__dirname + '/index.html');
})

app.listen(8087);

