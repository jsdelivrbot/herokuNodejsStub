//-- used to access canvas multi-part body signatures
var bodyParser = require('body-parser');

//var multer = require('multer');
//var upload = multer();

//-- used to determine files / paths
//var path = require('path');

//-- setup Express
var express = require('express');
var app = express();

//-- specify config variables
var config = require('config');

//-- required to parse canvas/multi-part requests
//-- always needs to be first.
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.set('port', (process.env.PORT || config.default.PORT));
app.use(express.static(__dirname + '/public'));
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

//-- page handlers

/**
 * Handler for the initial / page
 * @param req (request)
 * @param resp (Response)
 **/
function handleDefault(req, resp){
	resp.status(config.statusCodes.unauthorized)
		.send(config.statusCodes.unauthorizedText);
	
	//response.render('pages/index');
}

app.get('/', function(request, response){
	response.render('pages/index');
});

app.listen(app.get('port'), function(){
	console.log('Node app is running on port', app.get('port'));
});
