const express = require("express");
const mysql = require("mysql");

const config = {
   user: "root",
   password: "3570",
   server: "localhost",
   database: "nodemsql",
};

// Create connection
const db = mysql.createConnection(config);

// Connect db
db.connect((err) => {
   if (err) throw err;
   console.log(`MySql connected...`);
});

const app = express();

// Create DB
app.get("/createdb", (req, res) => {
   let sql = `CREATE DATABASE nodemsql`;
   db.query(sql, (err, result) => {
      if (err) throw err;
      console.log(result);
      res.send(`database created.`);
   });
});

// Create table
app.get("/createposttable", (req, res) => {
   let sql = `CREATE TABLE posts(
      id int AUTO_INCREMENT, 
      title VARCHAR(255), 
      body VARCHAR(255), 
      PRIMARY KEY (id))`;
   db.query(sql, (err, result) => {
      if (err) throw err;
      console.log(result);
      res.send(`Posts table created.`);
   });
});

// Insert post 1
app.get("/addpost1", (req, res) => {
   let post = { title: "Post one", body: "this is post number one" };
   let sql = `INSERT INTO posts SET ?`;
   let query = db.query(sql, post, (err, result) => {
      if (err) throw err;
      console.log(result);
      res.send(`Posts one added.`);
   });
});

// Insert post 2
app.get("/addpost2", (req, res) => {
   let post = { title: "Post two", body: "this is post number two" };
   let sql = `INSERT INTO posts SET ?`;
   let query = db.query(sql, post, (err, result) => {
      if (err) throw err;
      console.log(result);
      res.send(`Posts two added.`);
   });
});

// Select posts
app.get("/getposts", (req, res) => {
   let sql = `select * from posts`;
   let query = db.query(sql, (err, results) => {
      if (err) throw err;
      console.log(results);
      res.send(results);
   });
});

// Select an individual post
app.get("/getpost/:id", (req, res) => {
   let sql = `select * from posts where id = ${req.params.id}`;
   let query = db.query(sql, (err, result) => {
      if (err) throw err;
      console.log(result);
      res.send(result);
   });
});

// Update an individual post
app.get("/updatepost/:id", (req, res) => {
   const newTitle = "Updated title";
   let sql = `update posts set title = '${newTitle}' where id = ${req.params.id}`;
   let query = db.query(sql, (err, result) => {
      if (err) throw err;
      console.log(result);
      res.send(result);
   });
});

// Delete a post
app.get("/deletepost/:id", (req, res) => {
   let sql = `delete from posts where id = ${req.params.id}`;
   let query = db.query(sql, (err, result) => {
      if (err) throw err;
      console.log(result);
      res.send(result);
   });
});

app.get("/", (req, res) => {
   res.send(`okkk. listening...`);
});
app.listen(3000, () => {
   console.log(`Server started on port 3000`);
});
