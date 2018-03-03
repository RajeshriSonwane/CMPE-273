var voterAge = 'eleven';

try {
	if (voterAge == "")
		throw "Please Enter your age !!!";
	if (isNaN(voterAge))
		throw "Input is not a number. Please enter numeric value.";
	if (voterAge < 18)
		throw "Not eligible for voting!!";
	if (voterAge >= 18)
		console.log("Eligible for voting!!");
} catch (err) {
	console.log(err);
}