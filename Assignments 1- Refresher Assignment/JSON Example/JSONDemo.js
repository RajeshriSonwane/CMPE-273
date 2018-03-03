var contryInfo = '{"contry":[' + '{"name":"USA","capital":"Washington" },'
		+ '{"name":"India","lastName":"Dehli" }]}';

contryObj = JSON.parse(contryInfo);

console.log(contryObj.contry[0].name + " " + contryObj.contry[0].capital);
