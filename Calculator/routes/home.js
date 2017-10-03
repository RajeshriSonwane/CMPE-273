var ejs = require("ejs");

function signin(req, res) {
	ejs.renderFile('./views/calculate.ejs', function(err, result) {
		// render on success
		if (!err) {
			var num_1 = req.param("inputNum1");
			var num_2 = req.param("inputNum2");
			res.end(result);
		}
		// render or error
		else {
			res.end('An error occurred');
			console.log(err);
		}
	});
}

exports.calculate = calculate;