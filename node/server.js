const http = require("http");
const fs = require("fs");

http.createServer(function (request, response) {
	try {
		fs.readFile(request.url.slice(1), (err, data) => {
			if (err) {
				console.log(err);
				response.end("404");
			} else {
				response.end(data.toString());
			}
		});
	} catch (e) {
		console.log(e);
	}
}).listen(8080, "127.0.0.1", function() {
	console.log("Server has been started on 8080 port!");
});
