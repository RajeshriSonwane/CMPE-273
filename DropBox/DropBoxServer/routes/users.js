var express = require('express');
var router = express.Router();
var mysql = require('./mysql');
var fs = require('fs');
//var multer = require('multer');
//var glob = require('glob');
var testFolder = './routes/';

/* GET users listing. */
router.get('/', function (req, res, next) {
    res.send('respond with a resource');
});

/*
var storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './public/uploads/')
    },
    filename: function (req, file, cb) {
        cb(null, file.fieldname + '-' + Date.now() + '.jpeg')
    }
});

var upload = multer({storage:storage});
*/

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

    var getAllUsers = "SELECT firstname, lastname, UserID, userOverview, work, education, ContactNo, lifeEvents, "+
    "interests FROM user, UserDetails where user.email = UserDetails.UserID and user.email = "+ reqUserID  +";";
	console.log("Query is:" + getAllUsers);

	mysql.fetchData(function(err, results) {
		if (err) {
			throw err;
		} else {
			if (results.length > 0) {
				var rows = results;
				var jsonString = JSON.stringify(results);
				var jsonParse = JSON.parse(jsonString);
        console.console.log(jsonString);
        console.console.log(jsonParse);
				console.log("Results Type: " + (typeof results));
			} else {
				console.log("No users found in database");
			}
		}
	}, getAllUsers);
  console.console.log(results);

    res.status(201).json({message: results});
        return(results);
});

router.post('/doListDir', function (req, res, next) {
    var response = "";
	   var testFolder = req.body.dirpath;
	  console.log(testFolder);
	  fs.readdir(testFolder, function (err, files)
	  {
		     console.log(files.length);
		     console.log(files);
		     for(var i=0;i<files.length;i++)
		     {
		           response += files[i]+"<br>";
		     }
         res.send(response);
	  });
});

/*
router.get('/', function (req, res, next) {
    var resArr = [];
    glob("public/uploads/*.jpeg", function (er, files) {

        var resArr = files.map(function (file) {
            var imgJSON = {};
            imgJSON.img = 'uploads/'+file.split('/')[2];
            imgJSON.cols = 2  ;
            return imgJSON;
        });

        console.log(resArr);
        res.status(200).send(resArr);
    });

});

router.post('/upload', upload.single('mypic'), function (req, res, next) {
    console.log(req.body);
    console.log(req.file);
    res.status(204).end();
});
*/

module.exports = router;
