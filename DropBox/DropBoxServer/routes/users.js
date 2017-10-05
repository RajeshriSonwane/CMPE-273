var express = require('express');
var router = express.Router();
var mysql = require('./mysql');

/* GET users listing. */
router.get('/', function (req, res, next) {
    res.send('respond with a resource');
});

router.post('/doLogin', function (req, res, next) {

    var reqUsername = req.body.username;
    var reqEmail = req.body.email;
    var reqPassword = req.body.password;

    var getUser = "select * from USER where firstname='"
    			+ reqUsername + "' and password='"
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

module.exports = router;
