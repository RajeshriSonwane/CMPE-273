var express = require("express");
var routes = require('./routes/api');

var app =express();

app.use(routes);

app.listen(process.env.port || 3000, function(){
    console.log("server starting on port 3000");
});
