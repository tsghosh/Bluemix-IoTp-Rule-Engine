/**
 * Client Utility for interacting with JSON REST API
 */

'use strict';
var Client = require('node-rest-client').Client;

module.exports = function(username, password) {

	var options_auth = {
		user : username,
		password : password
	};
	var client = new Client(options_auth);
	var prototype = {};

	var headers = {
			"Content-Type" : "application/json"
		};

	prototype.get = function(url, callback) {
		var args = {};
		args.headers = headers;
		client.get(url, args, function(data, response) {
			callback(null,data);
		}).on('error', function (err) {
			callback(err,null);
		});
	};

	prototype.post = function(url, request, callback) {
		var args = {};
		args.headers = headers;
		args.data = request;
		client.post(url, args, function(data, response) {
			callback(null,data, response);
		}).on('error', function (err) {
			callback(err,null);
		});
	};

	prototype.put = function(url, request, callback) {
		var args = {};
		args.headers = headers;
		args.data = request;
		client.put(url, args, function(data, response) {
			callback(null,data, response);
		}).on('error', function (err) {
			callback(err,null);
		});
	};



	prototype.delete = function(url,callback) {
		var args = {};
		args.headers = headers;
		//args.data = request;
		client.delete(url, args, function(data, response) {
			callback(null,data, response);
		}).on('error', function (err) {
			callback(err,null);
		});
	};

	return prototype;
}
