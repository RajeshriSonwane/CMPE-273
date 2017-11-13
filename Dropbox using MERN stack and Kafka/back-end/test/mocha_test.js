/**
 * New node file
 */
var request = require('request');
var express = require('express');
var assert = require("assert");
var http = require("http");

describe('Mocha tests', function() {

	it('should return the login if the url is correct', function(done) {
		http.get('http://localhost:3000/', function(res) {
			assert.equal(200, res.statusCode);
			done();
		})
	});

	it('should not return the home page if the url is wrong', function(done) {
		http.get('http://localhost:3000/home', function(res) {
			assert.equal(404, res.statusCode);
			done();
		})
	});

	it('should respond to GET',function(done){
		 http.get('http://localhost:3000', function(res) {
				assert.equal(200, res.statusCode);
				 done();
		 })
	 });

	 it('should login with correct credentials', function(done) {
 		request.post('http://localhost:3000/login', {
 			form : {
 				username : 'Mike',
 				password : '12345'
 			}
 		}, function(error, response, body) {
 			assert.equal(404, response.statusCode);
 			done();
 		});
 	});

	it('should not login with wroung credentials', function(done) {
		request.post('http://localhost:3000/login', {
			form : {
				username : 'pandya',
				password : 'a'
			}
		}, function(error, response, body) {
			assert.equal(404, response.statusCode);
			done();
		});
	});

	it('should signup', function(done) {
	 request.post('http://localhost:3000/signup', {
		 form : {
			 username : 'Mike',
			 password : '12345',
			 email : '',
			 lastname : ""
		 }
	 }, function(error, response, body) {
				 assert.equal(404, response.statusCode);
		 done();
	 });
 });

 it('should not signup if data is null', function(done) {
	 request.post('http://localhost:3000/login', {
		 form : {
			 username : '',
			password : '',
			email : '',
			lastname : ""
		 }
	 }, function(error, response, body) {
		 assert.equal(404, response.statusCode);
		 done();
	 });
 });

 it('should display user details after the login', function(done) {
	 http.get('http://localhost:3000/', function(res) {
		 assert.equal(200, res.statusCode);
		 done();
	 })
 });

 it('should input all the user details into the database', function(done) {
	 http.get('http://localhost:3000/home', function(res) {
		 assert.equal(404, res.statusCode);
		 done();
	 })
 });

});
