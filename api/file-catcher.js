var express = require('express');
var multer = require('multer');
var fs = require('fs');
var app = express();

var DIR = 'uploads/';

var upload = multer({dest: DIR});

app.use(function(req, res, next) {
	var hostname = ( req.headers.host.match(/:/g) ) ? req.headers.host.slice( 0, req.headers.host.indexOf(":") ) : req.headers.host;
	res.setHeader('Access-Control-Allow-Origin','http://'+hostname+':4200');
	res.setHeader('Access-Control-Allow-Methods','POST');
	res.setHeader('Access-Control-Allow-Headers','X-Requested-With, Content-Type');
	res.setHeader('Access-Control-Allow-Credentials',true);
	next();
});
/*

app.use(multer({
	dest: DIR,

	rename: function(fieldname, filename) {
		return filename + Date.now();
	},

	onFileUploadStart: function(file) {
		console.log(file.originalname + ' is starting ...');
	},

	onFileUploadComplete: function(file) {
		console.log(file.fieldname + ' uploaded to ' + file.path);
	}
}));
*/

app.get('/upload',function(req, res) {
	res.end('file catcher example');
});

/*app.post('/',function(req, res) {
	upload(req, res, function(err) {
		if (err) {
			return res.end(err.toString());
		}

		res.end('File is uploaded');
	});
});
*/

app.post('/upload',upload.any(),function(req, res, next) {
	//console.log(req.files);
	fs.rename(DIR + req.files[0].filename,DIR + req.files[0].originalname);
	res.end('File has been uploaded');
	console.log('File has been uploaded');
});

var PORT = process.env.PORT || 3003;

app.listen(PORT, function() {
	console.log('Working on port ' + PORT);
});
