var connection =  new require('./kafka/Connection');
var login = require('./services/login');
var listDir = require('./services/listDir');
var userSignUp = require('./services/userSignUp');
var submitUserInfo = require('./services/submitUserInfo');

var consumer = connection.getConsumer("topic3");
var producer = connection.getProducer();

console.log('server is running');

consumer.on('message', function (message) {
    console.log('Backend kafka server - message received');
    console.log(JSON.stringify(message.value));

    var data = JSON.parse(message.value);
    console.log(data);
    console.log(data.data.key);

    if( data.data.key == 'login_api'){
      console.log(data.data.key);
      login.handle_request(data.data, function(err,res){
        console.log('Backend kafka server - after handle'+ res);
        console.log("Data reply to "+ data.replyTo);
        var payloads = [
            { topic: data.replyTo,
                messages:JSON.stringify({
                    correlationId:data.correlationId,
                    data : res
                }),
                partition : 0
            }
        ];
        producer.send(payloads, function(err, data){
            console.log("Payloads data "+ data);
          });
        return;
      });
    }

    else if(data.data.key == 'listDir_api'){
      listDir.handle_listDir(data.data, function(err,res){
        console.log('Backend kafka server - after handle'+res);
        var payloads = [
            { topic: data.replyTo,
                messages:JSON.stringify({
                    correlationId:data.correlationId,
                    data : res
                }),
                partition : 0
            }
        ];
        producer.send(payloads, function(err, data){
            console.log(data);
        });
        return;
      });
    }

    else if(data.data.key == 'signup_api'){
        console.log("Some other request");
        console.log('backend server js consumer_signup: on ', JSON.stringify(message));
        var data = JSON.parse(message.value);
        userSignUp.handle_signup(data.data, function(err, res){
            if(err){
                console.log('err');
                producer.send({error:err}, function(err, res){});
                return;
            }
            else{
                var payloads = [
                    { topic: data.replyTo,
                        messages:JSON.stringify({
                            correlationId:data.correlationId,
                            data : res
                        }),
                        partition : 0
                    }
                ];
                console.log(payloads)
                producer.send(payloads, function(err, data){});
                return;
            }

        });
    }

    else if(data.data.key == 'submitAbout_api'){
        console.log("Some other request");
        console.log('backend server js consumer_signup: on ', JSON.stringify(message));
        var data = JSON.parse(message.value);
        submitUserInfo.handle_submitUserInfo(data.data, function(err, res){
            if(err){
                console.log('err');
                producer.send({error:err}, function(err, res){});
                return;
            }
            else{
                var payloads = [
                    { topic: data.replyTo,
                        messages:JSON.stringify({
                            correlationId:data.correlationId,
                            data : res
                        }),
                        partition : 0
                    }
                ];
                console.log(payloads)
                producer.send(payloads, function(err, data){});
                return;
            }
        });
    }
});
