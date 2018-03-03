/**
 * 
 */
function calArea(majorAxisLen, minorAxisLen) {
	var axis = document.getElementById("form1");
	document.write(axis);
	var i;
	var area = Math.PI;

	for (i = 0; i < axis.length; i++) {
		area *= axis.elements[i].value + "<br>";
	}

	return area;
}