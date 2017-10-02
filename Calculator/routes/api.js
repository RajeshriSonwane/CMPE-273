var express = require("express");
var router =express.Router();

router.post("/calsum/:number1/:number2", function(req, res){
	var num_1 = parseFloat(req.params.number1); 
	var num_2 = parseFloat(req.params.number2); 
	var answer = num_1 + num_2;
	res.send(answer);
});

router.post("/calsub/:number1/:number2", function(req, res){
	var num_1 = parseFloat(req.params.number1); 
	var num_2 = parseFloat(req.params.number2); 
	var answer = num_1 - num_2;
	res.send(answer);
});

router.post("/calmult/:number1/:number2", function(req, res){
	var num_1 = parseFloat(req.params.number1);
	var num_2 = parseFloat(req.params.number2); 
	var answer = num_1 * num_2;
	res.send(answer);
});

router.post("/caldiv/:number1/:number2", function(req, res){
	var num_1 = parseFloat(req.params.number1); 
	var num_2 = parseFloat(req.params.number2); 
	var answer = (num_1 / num_2);
	res.send(answer);
});

module.exports = router;