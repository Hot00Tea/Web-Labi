const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const MongoClient = require('mongodb').MongoClient;

app.use(bodyParser.urlencoded({ 
  				extended: false
}));
// Result will return in JSON format
app.use(bodyParser.json());
// Route to JavaScript code
app.use("/js", express.static("js"));
// Root
app.get("/", function (req, res) {
    res.sendFile(__dirname + "/index.html");
});
// Route that handle post request from ajax
app.post("/index", function (req, res){
     if(!req.body) return res.sendStatus(400);

     const mongoClient = new MongoClient("mongodb://localhost:27017/", { useNewUrlParser: true });
     mongoClient.connect(function(err, client){

          const db = client.db('app_db');
          const collection = db.collection('some_data');
          collection.insertOne(req.body, function(err, result) {
            if (err){
              console.log(err);
            }
            res.status(200).send(req.body);
            console.log(req.body);
            client.close();
          });
      });

});
// Start server on 8080 port
app.listen(8080)
