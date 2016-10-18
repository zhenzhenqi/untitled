const express = require('express');
const aws = require('aws-sdk');
const app = express();
var s3 = new AWS.S3();


var s3Bucket = new AWS.S3( { params: {Bucket: process.env.S3_BUCKET} } )



app.set('views', './views');
app.use(express.static('./public'));
app.engine('html', require('ejs').renderFile);
app.listen(process.env.PORT || 3000);


var data = {
    Key: imageName,
    Body: imageFile
};

s3Bucket.putObject(data, function (err, data) {
    if (err) {
        console.log('Error uploading data: ', data);
    } else {
        console.log('succesfully uploaded the image!');
    }
});


var urlParams = {
    Bucket: s3Bucket,
    Key: 'imageName'
};

s3Bucket.getSignedUrl('getObject', urlParams, function (err, url) {
    console.log('the url of the image is', url);
})