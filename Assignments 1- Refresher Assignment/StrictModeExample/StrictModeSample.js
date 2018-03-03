color = "Black";                          //no error 

function concatString(str1, str2) {
	'use strict'
	str3 = str1 + str2;						// declaration error
	return str3;
}
console.log(concatString('San', 'Jose'));