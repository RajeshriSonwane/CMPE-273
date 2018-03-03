function calSimpleInterest(principle, rate, time) {
	var rateOfInterest = rate / 100;
	return principle * rateOfInterest * time;
}

function calCompoundInterest(principle, rate, time, compundsPerYear) {
	var rateOfInterest = rate / 100;
	var i = Math.pow((1 + rateOfInterest / compundsPerYear), compundsPerYear * time);
	var CmpdInterest = principle * i;
	return CmpdInterest;
}

console.log("Simple Interest : " + calSimpleInterest(1000, 12, 2));
console.log("Compound Interest :" + calCompoundInterest(1000, 5, 12, 10));