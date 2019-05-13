function logData() {
	var inputs = this.parentNode.getElementsByTagName("input");
	var obj = {};
	for(var i=0; i<inputs.length; i++) {
		obj["input" + i.toString()] = inputs[i].value;
	}
	console.log(obj);
}

window.onload = function() {
	var submitButton = document.getElementById("submitButton");
	if (!submitButton) throw Error("Can't find submitButton"); 
	submitButton.onclick = logData;
}
