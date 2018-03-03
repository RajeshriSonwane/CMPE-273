function searchString() {
	var myStr1 = "Welcome to San Jose.. Welcome!!";
	var matchPosition = myStr1.search(/welcome/i);
							// /i - to ignore case sensitive
	return matchPosition;
}

function replaceString() {
	var myStr2 = "Welcome to San Jose.. Welcome!!";
	var replaceMatch = myStr2.replace(/Welcome/g, "Hello");
							// /g -to replace all the occurrence of string
	return replaceMatch;
}

console.log(searchString());
console.log(replaceString());