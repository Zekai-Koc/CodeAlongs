const MongoClient = require("mongodb").MongoClient;
const ObjectID = require("mongodb").ObjectID;
// name of our database
const dbname = "crud_mongodb";
// location of where our mongoDB database is located
const url = "mongodb://localhost:27017";
// Options for mongoDB
const mongoOptions = { useNewUrlParser: true };

const state = {
   db: true,
};

const connect = (cb) => {
   // if state is not NULL
   // Means we have connection already, call our CB
   if (state.db) cb();
   else {
      // attempt to get database connection
      MongoClient.connect(url, mongoOptions, (err, client) => {
         // unable to get database connection pass error to CB
         if (err) cb(err);
         // Successfully got our database connection
         // Set database connection and call CB
         else {
            state.db = client.db(dbname);
            cb();
         }
      });
   }
};

// returns OBJECTID object used to
const getPrimaryKey = (_id) => {
   return ObjectID(_id);
};

// returns database connection
const getDB = () => {
   return state.db;
};

module.exports = { getDB, connect, getPrimaryKey };

// const mongoClient = require("mongodb").MongoClient;
// const ObjectID = require("mongodb").ObjectId;
// const dbName = "crud_mongodb";
// const url = "mongodb://localhost:27017";
// const mongoOptions = { useNewUrlParser: true };

// const state = {
//    db: true,
// };

// const connect = (cb) => {
//    if (state.db) cb();
//    else {
//       mongoClient.connect(url, mongoOptions, (err, client) => {
//          if (err) cb(err);
//          else {
//             state.db = client.db(dbName);
//             cb();
//          }
//       });
//    }
// };

// const getPrimaryKey = (_id) => ObjectID(_id);

// const getDB = () => state.db;

// module.exports = {
//    getDB,
//    connect,
//    getPrimaryKey,
// };
