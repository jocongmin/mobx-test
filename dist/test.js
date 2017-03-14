var express = require('express'),
    app = express();
var router=express.Router();
app.get('/',function(req,res,next){
	console.log(req,'sdflkjsdfkjreq')
})
router.use(function(req,res,next){
	console.log('time',Date.now());
	next();
});
router.use('/test',function(req,res,next){
	console.log('testsdfsdfs')
});
app.listen(9999)