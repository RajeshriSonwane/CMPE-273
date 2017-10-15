exports.calculate = function(req, res) {

	var number1, operator, number2, result;
	number1 = req.param("num1");
	operator = req.param("operation");
	number2 = req.param("num2");

	console.log(number1 + " " + operator + " " + number2);

	switch (operator) {
	case '+':
		result = parseFloat(number1) + parseFloat(number2);
		break;
	case '-':
		result = parseFloat(number1) - parseFloat(number2);
		break;
	case '*':
		result = parseFloat(number1) * parseFloat(number2);
		break;
	case '/':
		result = parseFloat(number1) / parseFloat(number2);
		break;
	}
	console.log(result);

	res.render('index', { title: result });

};