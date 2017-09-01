var express = require('express');
var multer = require('multer');
var bodyParser = require('body-parser');
var MulterAzureStorage = require('multer-azure-storage')

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
                 return res.end(err);
             }    
             return res.end("File uploaded sucessfully!.");
         });    
     });


// Todo: 
// Control names
// List images to give user a selection
// Implement glitch parameter ui
// Implement actual glitching 
// Implement image download


var upload = multer({
    storage: new MulterAzureStorage({
    azureStorageConnectionString: process.env.azureblob_connectionstring,
    azureStorageAccessKey: process.env.azureblob_key,
    azureStorageAccount: process.env.azureblob_storageaccount,
    containerName: process.env.azureblob_containername,
    containerSecurity: process.azureblob_containersecurity
  }),name: "test.jpg"
}).array("imgUploader", 3);

// var upload = multer({      
//              storage: storage
//          }).array("imgUploader", 3); //Field name and max count



var port = process.env.PORT || 1337;
app.listen(port);


