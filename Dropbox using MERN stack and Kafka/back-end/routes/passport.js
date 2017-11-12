var passport = require("passport");
var LocalStrategy = require("passport-local").Strategy;
var mongoURL = "mongodb://localhost:27017/test";
var kafka = require('./kafka/client');

module.exports = function(passport) {
    passport.use('login', new LocalStrategy(function(username , password, done) {
        console.log('in passport');
        kafka.make_request('topic2',{"username":username,"password":password, "key":"login_api"}, function(err,results){
            console.log('in result');
            console.log(results);
            if(err){
                done(err,{});
            }
            else
            {
                if(results.code == 200){
                    done(null,{username:"bhavan@b.com",password:"a"});
                }
                else {
                    done(null,false);
                }
            }
        });
    }));
};
