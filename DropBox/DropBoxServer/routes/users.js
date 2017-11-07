var express = require('express');
var router = express.Router();
var mysql = require('./mysql');
var fs = require('fs');
var testFolder = './routes/';

/* GET users listing. */
router.get('/', function (req, res, next) {
    res.send('respond with a resource');
});

router.post('/doLogin', function (req, res, next) {

    var reqEmail = req.body.email;
    var reqPassword = req.body.password;

    var getUser = "select * from USER where email='"
    			+ reqEmail + "' and password='"
    			+ reqPassword + "'";
    	console.log("Query is:" + getUser);

      mysql.fetchData(function(err, results) {
        if (err) {
            throw err;
          } else {
          if (results.length > 0) {
                  console.log("valid Login");
                  res.status(201).json({message: "Login successful"});
          } else {
            console.log("Invalid Login");
            res.status(401).json({message: "Login failed"});
          }
        }
        }, getUser);

});

router.post('/doSignUp', function (req, res, next) {

    var reqUsername = req.body.username;
    var reqLastName = req.body.lastname;
    var reqEmail = req.body.email;
    var reqPassword = req.body.password;

    var postUser = "INSERT INTO USER VALUES( '" + reqUsername
    			+ "','" + reqLastName + "','"
    			+ reqEmail + "','" + reqPassword + "')";

    mysql.fetchData(function(err, results) {
    		if (err) {
    			throw err;
    		}
    	}, postUser);

    res.status(201).json({message: "User Registration successful"});
});

router.post('/UserInfo', function (req, res, next) {

    var reqUserID = req.body.email;
    var requserOverview = req.body.userOverview;
    var reqwork = req.body.work;
    var reqeducation = req.body.education;
    var reqContactNo = req.body.ContactNo;
    var reqlifeEvents = req.body.lifeEvents;
    var reqinterests = req.body.interests;

    var postUser = "INSERT INTO UserDetails VALUES( '" + reqUserID
    			+ "','" + requserOverview	+ "','" + reqwork + "','"
    			+ reqeducation + "','" + reqContactNo + "','" + reqlifeEvents
          			+ "','" +reqinterests	+"')";

    mysql.fetchData(function(err, results) {
    		if (err) {
    			throw err;
    		}
    	}, postUser);

    res.status(201).json({message: "Details submitted successful"});
});

router.post('/DisplayUserInfo', function (req, res, next) {

    var reqUserID = req.body.email;

    var getAllUsers = "SELECT * FROM user where email = '"+ reqUserID  +"';";
	   console.log("Query is:" + getAllUsers);

    	mysql.fetchData(function(err, results) {
    		if (err) {
    			console.log(err);
        		} else {
        			if (results.length > 0) {
                console.log(results);
        				var rows = results;
        				var jsonString = JSON.stringify(results);
        				var jsonParse = JSON.parse(jsonString);
                console.log(jsonString);
                console.log(jsonParse);
        				console.log("Results Type: " + (typeof results));
                return res.status(201).send({uname: results.username, lname: results.lastname, email: results.email, password: results.password });
        			} else {
        				console.log("No users found in database");
                return res.status(500);
        			}
        		}
        	}, getAllUsers);

});

module.exports = router;
