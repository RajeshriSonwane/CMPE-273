var mongo = require("./mongo");
var mongoURL = "mongodb://localhost:27017/test";

function handle_submitUserInfo(msg, callback){
        try {
            console.log('In handle Submit User info request');
    
            mongo.connect(mongoURL, function(){
                var collection = mongo.collection('userDetails')
                collection.insertOne({
                    username: msg.reqUserID,
                    userOverview: msg.requserOverview,
                    work: msg.reqwork,
                    education: msg.reqeducation,
                    ContactNo: msg.reqContactNo,
                    lifeEvents: msg.reqlifeEvents,
                    interests: msg.reqinterests
                })
            });
        }
        catch (e){
            callback(e,{});
        }
}

exports.handle_submitUserInfo= handle_submitUserInfo;
