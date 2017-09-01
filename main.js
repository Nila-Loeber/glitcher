var express = require('express');
var app = express();

app.use(express.static('public'));

app.get('/', function(req, res){
   res.send("Hello world express!");
});

app.get('/hello', function(req, res){
   res.send("Hello world from /hello. Param: " + req.query.param);
});

var port = process.env.PORT || 1337;
app.listen(port);


