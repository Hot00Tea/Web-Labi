const https = require("https");
const fs = require("fs");
const cheerio = require("cheerio");

tmp = https.get("https://www.myscore.com.ua", (resp) => {
	let data = "";
	resp.on("data", (chunk) => {
		data += chunk;
	});
	resp.on("end", () => {
		fs.writeFile("index.html", data, () => {});
	});
});

tmp.on("error", (err) => {
	console.log(err.message)
});

tmp.end();
