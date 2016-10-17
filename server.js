var express =   require("express");
var multer  =   require('multer');
var app         =   express();
var storage =   multer.diskStorage({
  destination: function (req, file, callback) {
    callback(null, './public/uploads');
  },
  filename: function (req, file, callback) {
    // callback(null, file.fieldname + '-' + Date.now());
      callback(null, 'userPhoto.png');
  }
});

var upload = multer({ storage : storage}).single('userPhoto');

app.use(express.static('public'));

app.get('/',function(req,res){
      res.sendFile(__dirname + "/index.html");
});

app.get('/uploads/userPhoto.png',function(req,res){
    res.sendFile(__dirname + "/uploads/userPhoto.png");
});

app.post('/api/photo',function(req,res){
    upload(req,res,function(err) {
        if(err) {
            return res.end("Error uploading file.");
        }
        res.end("File is uploaded <button href='/'>Back</button>");
    });
});

app.listen(3000,function(){
    console.log("Working on port 3000");
});