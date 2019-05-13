window.onload = function() {
	var time = 234245645335;
	var string = prompt("Lorem?");

	time %= 3600;
	alert("Seconds later to full hour " + time);
	alert("A letter contain in string " + letterSearcher(string, 'a'));
}

function letterSearcher(string, letter) {
	if (arguments.length != 2) throw Error("False function init");
	var result = Array();
	for (let i=0; i<string.length; i++) {
		if (string[i] == letter) result.push(i);
	}

	return result.toString();
}
