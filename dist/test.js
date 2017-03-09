var express = require('express'),
    app = express();
app.get('/', function(req, res) {
  res.sendFile(__dirname + '/index.html');
})
app.get('/bundle.js', function(req, res) {
  res.sendFile(__dirname + '/bundle.js');
  console.log('server')
})

app.listen(9999);

