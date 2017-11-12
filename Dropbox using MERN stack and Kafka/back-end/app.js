var express = require('express');
var path = require('path');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var passport = require('passport');
var cors = require('cors');
require('./routes/passport')(passport);

var routes = require('./routes/index');
var users = require('./routes/users');
var mongoSessionURL = "mongodb://localhost:27017/sessions";
var expressSessions = require("express-session");
var mongoStore = require("connect-mongo/es5")(expressSessions);
var fs = require('fs');
var MongoClient = require('mongodb').MongoClient;
var mongoURL = "mongodb://localhost:27017/test";
var db;
var kafka = require('./routes/kafka/client');

var multer = require('multer');
var glob = require('glob');

var storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './public/uploads/')
    },
    filename: function (req, file, cb) {
        cb(null, file.fieldname + '-' + Date.now() + '.jpeg')
    }
});

var upload = multer({storage:storage});

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));

var corsOptions = {
    origin: 'http://localhost:3000',
    credentials: true,
}
app.use(cors(corsOptions))
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(expressSessions({
    secret: "CMPE273_passport",
    resave: false,
    //Forces the session to be saved back to the session store, even if the session was never modified during the request
    saveUninitialized: false, //force to save uninitialized session to db.
    //A session is uninitialized when it is new but not modified.
    duration: 30 * 60 * 1000,
    activeDuration: 5 * 6 * 1000,
    store: new mongoStore({
        url: mongoSessionURL
    })
}));
app.use(passport.initialize());

app.use('/', routes);
app.use('/users', users);
app.use('/files', users);

app.use('./public/uploads', express.static(path.join(__dirname, 'uploads')));



app.post('/logout', function(req,res) {
    console.log(req.session.user);
    req.session.destroy();
    console.log('Session Destroyed');
    res.status(200).send();
});

app.get('/', function (req, res, next) {
    var resArr = [];

    glob("public/uploads/*.jpeg", function (er, files) {

        var resArr = files.map(function (file) {

            var imgJSON = {};
            imgJSON.img = 'uploads/'+file.split('/')[2];
            imgJSON.cols = 2  ;
            return imgJSON;
        });

        console.log(resArr);
        res.status(201).send(resArr);
    });
});

app.post('/upload', upload.single('mypic'), function (req, res, next) {
    console.log(req.body);
    console.log(req.file);
    res.status(204).end();
});

app.post('/login', function(req, res) {
    passport.authenticate('login', function(err, user) {
        if(err) {
            res.status(500).send();
        }
        if(!user) {
            res.status(401).send();
        }
        else{
          req.session.user = req.body.username;
          console.log(req.session.user);
          console.log("session initilized");
          return res.status(201).send({username:"test"});
      }
    })(req, res);
});

app.post('/signup', function(req, res) {
      try {
           console.log(user_data);
           var user_data = {
               "reqUsername" : req.body.username,
               "reqLastName" : req.body.lastname,
               "reqEmail" : req.body.email,
               "reqPassword" : req.body.password,
               "key"       : "signup_api"
           }
           kafka.make_request('topic1',user_data, function(err,response_kafka){
               if(err){
                   console.trace(err);
                   res.status(401).json({error: err});
               }
               else{
                   console.log("Signup user response ", JSON.stringify(response_kafka));
                   res.status(201).send({message: "Success", data : response_kafka});
               }
           });

     }
     catch (e){
         console.log(e);
         res.send(e);
     }
});

app.post('/submitUserInfo', function (req, res, next) {

    try {
         console.log(user_data);
         var user_data = {
             "reqUserID" : req.body.email,
             "requserOverview" : req.body.userOverview,
             "reqwork" : req.body.work,
             "reqeducation" : req.body.education,
             "reqContactNo" : req.body.ContactNo,
             "reqlifeEvents" : req.body.lifeEvents,
             "reqinterests" : req.body.interests,
             "key"       : "submitAbout_api"
         }
         kafka.make_request('topic1',user_data, function(err,response_kafka){
             if(err){
                 console.trace(err);
                 res.status(401).json({error: err});
             }
             else{
                 console.log("Signup user response ", JSON.stringify(response_kafka));
                 res.status(201).send({message: "Success", data : response_kafka});
             }
         });

   }
   catch (e){
       console.log(e);
       res.send(e);
   }
});

app.post('/listdir', function(req, res) {
        var reqUsername = req.body.username;
        try{
          kafka.make_request('topic2',{username: reqUsername, key : "listDir_api"}, function(err,test5res){
            if(err){
                res.status(401).json({error: err});
            }
            else
            {
                  console.log("Signup user response ", JSON.stringify(test5res));
                  res.status(201).send({message: "Success", dirStructure : test5res.resArray});
            }
        });
      }
      catch (e){
          console.log(e);
          res.send(e);
      }
});

module.exports = app;
