var express = require('express');
var multer = require('multer');
var bodyParser = require('body-parser');

var app = express();
app.use(express.static('public'));
app.use(bodyParser.json());


// Routes
app.get('/', function(req, res){
   res.send("Hello world express!");
});

app.get('/api/greeter', function(req, res){
   res.send("Hello, " + req.query.name);
});

app.post("/api/upload", function(req, res) {   
         upload(req, res, function(err) {
             if (err) {
                 return res.end("Something went wrong!");
             }    
             return res.end("File uploaded sucessfully!.");
         });    
     });



var storage = multer.diskStorage({  
         destination: function(req, file, callback) {
             callback(null, "./images");
         },
         filename: function(req, file, callback) {   
             callback(null, file.fieldname + "_" + Date.now() + "_" + file.originalname);
         }
     });

var upload = multer({      
             storage: storage
         }).array("imgUploader", 3); //Field name and max count



var port = process.env.PORT || 1337;
app.listen(port);


