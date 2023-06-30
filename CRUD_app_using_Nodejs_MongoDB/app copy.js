const express = require("express");
const app = express();
const main = require("./db.js");

app.listen(3000, () => {
   console.log("App listening on port 3000...");
   main()
      .then(console.log)
      .catch(console.error)
      .finally(() => client.close());
});

// const express = require("express");
// const bodyParser = require("body-parser");
// const app = express();
// app.use(bodyParser.json());
// const path = require("path");

// app.listen(3000, () => {
//    console.log("Listening on port 3000...");
// });

// var MongoClient = require("mongodb").MongoClient;
// MongoClient.connect("mongodb://127.0.0.1:27017", function (err, client) {
//    console.log("kkkkkkkk");

//    if (err) {
//       console.error("Error connecting to MongoDB:", err);
//       return;
//    }

//    var db = client.db("crud_mongodb");
//    console.log("Connected to MongoDB!");

//    // Write database Insert/Update/Query code here...

//    // Remember to close the connection when you're done

//    client.close();
// });

// // const MongoClient = require("mongodb").MongoClient;
// // const assert = require("assert");

// // // Connection URL
// // const url = "mongodb://localhost:27017";

// // // Database Name
// // const dbName = "crud_mongodb";

// // // Create a new MongoClient
// // const client = new MongoClient(url);

// // // Use connect method to connect to the Server
// // client.connect(function (err) {
// //    assert.equal(null, err);
// //    console.log("Connected successfully to server");

// //    const db = client.db(dbName);

// //    client.close();
// // });

// // const db = require("./db.js");
// // const collection = "todo";

// // app.get("/", (req, res) => {
// //    res.sendFile(path.join(__dirname, "index.html"));
// // });

// // app.get("/getTodos", (req, res) => {
// //    db.getDB()
// //       .collection(collection)
// //       .find({})
// //       .toArray((err, documents) => {
// //          if (err) console.log(err);
// //          else {
// //             console.log(documents);
// //             res.json(documents);
// //          }
// //       });
// // });

// // db.connect((err) => {
// //    if (err) {
// //       console.log(`Unable to connect to database!`);
// //       process.exit(1);
// //    } else {
// //       app.listen(3000, () => {
// //          console.log(`Connected to database, listening on port 3000`);
// //       });
// //    }
// // });
