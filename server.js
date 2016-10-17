var express =   require("express");
var multer  =   require('multer');


var storage = multer.diskStorage({
  destination: function (req, file, callback) {
    callback(null, './public/uploads');
  },
  filename: function (req, file, callback) {
      callback(null, 'userPhoto.png');
  }
});

var upload = multer({ storage : storage}).single('userPhoto');


var app         =   express();
app.use(express.static('public'));


app.get('/',function(req,res){
      res.sendFile(__dirname + "/index.html");
});

app.post('/api/photo', function(req,res){
    upload(req,res,function(err) {
        if(err) {
            console.log(err);
            res.sendFile(__dirname + '/error.html');
        }
        res.sendFile(__dirname + '/success.html');
    });
});

app.listen(3000,function(){
    console.log("Working on port 3000");
    console.log("this is an awesome project...");
});