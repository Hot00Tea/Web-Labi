const https = require("https");
const fs = require("fs");
const mongo = require("mongodb").MongoClient;

function write2db(obj) {
	let uri = "mongodb://localhost:27017/"; // This can be export to OS enivoverment vars
	const client = new mongo(uri, { useNewUrlParser: true }); // Deprecated feachure, and mongo won't connect without it
	const conn = client.connect((err, client) => { // Intime handle func
		const db = client.db("nodejs");
		const collection = db.collection("pages");
		collection.insertOne(obj);

		client.close();
	});

}

tmp = https.get("https://www.myscore.com.ua", (resp) => { // This func would be easy upgrage
  let data = "";

  // A chunk of data has been recieved.
  resp.on("data", (chunk) => {
    data += chunk;
  });

  resp.on("end", () => {
    fs.writeFile("index.html", data, () => {}); // Write to index.html
    write2db({ "url": "https://myscore.com.ua", "data": data }); // Some intresting date will be wite in feature
  });

});

tmp.on("error", (err) => {
  console.log("Error: " + err.message);
});

tmp.end();

