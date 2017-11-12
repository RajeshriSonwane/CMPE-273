var mongo = require("./mongo");
var fs = require('fs-extra');
var fs_native = require('fs');
var mongoURL = "mongodb://localhost:27017/test";

function handle_signup(msg, callback){
        try {
                 console.log('In handle User SignUp request');
                 mongo.connect(mongoURL, function(){
                    var collection = mongo.collection('login')
                    collection.insertOne({
                        username: msg.reqUsername,
                        lname: msg.reqLastName,
                        email: msg.reqEmail,
                        password: msg.reqPassword
                    }).then(function(result){
                        fs.mkdirsSync('./files/' + msg.reqUsername);
                        callback(null, result.ops[0]);
                    }).
                    catch(function(e){
                        callback({"error": "User already exists... Try login instead!"}, false);
                    });
            });
        }
        catch (e){
            callback(e,{});
        }
}

exports.handle_signup = handle_signup;
