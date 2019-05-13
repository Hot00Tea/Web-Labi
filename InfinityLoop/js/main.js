function infinityLoop() {
	var counter=0;
	while (true) {
		if (counter>=1000) throw Error("Infinity loop error");
		console.log("Looping...");
		counter++;
	}
}

window.onload = function() {
	try {
		infinityLoop();
	} 
	catch (e) {
		console.log(e);
	}
}
