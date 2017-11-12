var mongo = require("./mongo");
var mongoURL = "mongodb://localhost:27017/test";
var fs = require('fs');

function handle_listDir(msg, callback){
      var res = {};
      console.log("In handle ListDir request:"+ JSON.stringify(msg));

      var resArray = [];
      mongo.connect(mongoURL, function(){
        console.log('Connected to mongo at: ' + mongoURL);
        var coll = mongo.collection('files');

        coll.find({ username: msg.username }).toArray(function(err, resFiles) {
          if (err) {
              console.log(err);
              res.resArray = resArray;
          }else {
            console.log(resFiles);
            for(var i=0;i<resFiles.length;i++)
            {
                 resArray[i] = resFiles[i].DirName;
             }
            console.log("Search successful");
            res.resArray = resArray;
          }
          callback(null, res);
        });
  });
}


exports.handle_listDir = handle_listDir;
