var express = require('express'),
    app = express();
app.get('*', function(req, res) {
    var fileName = req.url;
    console.log(fileName);
    if (fileName == '/') {
        res.sendFile(__dirname + '/index.html');
    }else{
    	res.sendFile(__dirname + fileName);
    }
});
app.listen(9999);
