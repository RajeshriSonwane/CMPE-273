var mongo = require("./mongo");
var mongoURL = "mongodb://localhost:27017/test";

function handle_request(msg, callback){
  var res = {};
  console.log("In handle Login request:"+ JSON.stringify(msg));

    mongo.connect(mongoURL, function(err){

                  console.log('Connected to mongo at: ' + mongoURL);
                  var coll = mongo.collection('login');

                  coll.findOne({username: msg.username, password:msg.password}, function(err, user){
                      if (user) {
                          console.log(user);
                          res.code = "200";
                          res.value = "Success Login";
                          console.log(res);

                      } else {
                        console.log(err);
                        res.code = "401";
                        res.value = "Failed Login";
                      }
                      callback(null, res);
              });
      });
}

exports.handle_request = handle_request;
