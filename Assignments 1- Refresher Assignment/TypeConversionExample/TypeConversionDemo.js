var num1 = 10;
var str1 = '145hdj89';

console.log("Value of num1 is = " + num1 + ", Type = " + typeof num1);

console.log("After using toSring() method, type of num1 is = "
		+ typeof num1.toString()); 	
					// Number is converted into String

var num3 = parseInt(str1); 
					// String is converted into Number
console.log("After parsing str1 ='" + str1 + "', value of str1 = " + num3
		+ ". And its type is = " + typeof parseInt(str1));