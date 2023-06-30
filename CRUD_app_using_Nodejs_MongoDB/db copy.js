const { MongoClient } = require("mongodb");

// Connection URL
const url = "mongodb://localhost:27017";
const client = new MongoClient(url);

// Database Name
const dbName = "crud_mongodb";

async function main() {
   // Use connect method to connect to the server
   await client.connect();
   console.log("Connected successfully to server");
   const db = client.db(dbName);
   const collection = db.collection("todo");

   // the following code examples can be pasted here...

   // const insertResult = await collection.insertMany([
   //    { a: 1 },
   //    { a: 2 },
   //    { a: 3 },
   // ]);

   // console.log("Inserted documents =>", insertResult);

   const findResult = await collection.find({}).toArray();
   console.log("Found documents =>", findResult);

   return "done.";
}

// main()
//    .then(console.log)
//    .catch(console.error)
//    .finally(() => client.close());

module.exports = main;

// const MongoClient = require("mongodb").MongoClient;
// const assert = require("assert");

// // Connection URL
// const url = "mongodb://localhost:27017";

// // Database Name
// const dbName = "crud_mongodb";

// // Create a new MongoClient
// const client = new MongoClient(url);

// // Use connect method to connect to the Server
// client.connect(function (err) {
//    assert.equal(null, err);
//    console.log("Connected successfully to server");

//    const db = client.db(dbName);

//    client.close();
// });

// // const MongoClient = require("mongodb").MongoClient;
// // const ObjectID = require("mongodb").ObjectID;
// // const dbname = "crud_mongodb";
// // const url = "mongodb://127.0.0.1:27017";
// // const mongoOptions = { useNewUrlParser: true };

// // const state = {
// //    db: null,
// // };

// // const connect = (cb) => {
// //    if (state.db) cb();
// //    else {
// //       console.log("hhhhhhhhhh");
// //       MongoClient.connect(url, mongoOptions, (err, client) => {
// //          if (err) {
// //             console.log("errrrrrroooooorrrr...");
// //             cb(err);
// //          } else {
// //             console.log("gggggggggg");

// //             state.db = client.db(dbname);
// //             cb();
// //          }
// //       });
// //    }
// // };

// // const getPrimaryKey = (_id) => ObjectID(_id);

// // const getDB = () => {
// //    state.db;
// // };

// // module.exports = {
// //    getDB,
// //    connect,
// //    getPrimaryKey,
// // };
