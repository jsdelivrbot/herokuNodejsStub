

module.exports = {
	
	//-- which environment
	"env": "default",
	
	//-- defaults
	"default": {
		"PORT": 5000
	},
	
	//-- https://www.w3.org/Protocols/rfc2616/rfc2616-sec10.html
	"statusCodes": {
		"unauthorized": 401,
		"unauthorizedText": "Unauthorized",
		"success": 200,
		"successText": "Success"
	}
};

//-- post processing
module.exports.default.STATUS_CODE = module.exports.statusCodes.unauthorized;
module.exports.default.STATUS_TEXT = module.exports.statusCodes.unauthorizedText;

