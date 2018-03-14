/**
 * REST API Client for IOT 
 */

var restClientUtils = require('/api/utils/restclientutils');

module.exports = function() {
	var base_url = 'https://iotrti-prod.mam.ibmserviceengage.com/api/v2';
	var username = 'x-tuhin-x';
	var password = 'xx-tuhin-xx';

	var rtiClient = restClientUtils(username, password);

	var prototype = {};

	prototype.get = function(path, callback) {
		var url = base_url + path;
		rtiClient.get(url, callback);
	}

	prototype.post = function(path, request, callback) {
		var url = base_url + path;
		rtiClient.post(url, request, callback);
	}
	
	prototype.put = function(path, request, callback) {
		var url = base_url + path;
		rtiClient.put(url, request, callback);
	}
	
	prototype.del = function(path,callback) {
		var url = base_url + path;
		rtiClient.delete(url, callback);
	}
	
	return prototype;
}
