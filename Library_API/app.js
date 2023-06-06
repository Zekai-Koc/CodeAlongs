"use strict";
const express = require("express");
const { v4: uuidv4 } = require("uuid");
const bookList = require("./books.json");

// import express from "express";
// import { v4 as uuidv4 } from "uuid";
// import bookList from "./books.json" assert { type: "json" };

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
   readBooks(req, res);
});

app.get("/books", (req, res) => {
   readBooks(req, res);
});

app.post("/books", (req, res) => {
   createBook(req, res);
});

app.put("/books/:id", (req, res) => {
   updateBook(req, res);
});

app.delete("/books/:id", (req, res) => {
   deleteBook(req, res);
});

function deleteBook(req, res) {
   const { id } = req.params;

   if (!id) {
      res.status(400);
      res.send("No book id!");
      return;
   }

   const book = bookList.find((book) => book.id == id);
   if (!book) {
      res.status(404);
      res.send("Invalid book id!");
      return;
   }

   bookList.splice(bookList.indexOf(book), 1);

   res.send(bookList);
}

function updateBook(req, res) {
   const { id } = req.params;

   const { title, author } = req.body;

   if (!title || !author || !id) {
      res.status(400);
      res.send("Invalid request!");
      return;
   }

   const book = bookList.find((book) => book.id == id);
   if (!book) {
      res.status(404);
      res.send("Invalid book id!");
      return;
   }
   book.title = title;
   book.author = author;
   res.status(200);
   res.send({ message: "Update succesfull.", book });
}

function createBook(req, res) {
   const { title, author } = req.body;
   const id = uuidv4();

   if (!title || !author) {
      res.status(400);
      res.send("Invalid request!");
      return;
   }

   const newBook = {
      id: id,
      title: title,
      author: author,
   };
   bookList.push(newBook);
   res.status(201);
   res.send(bookList);
}

function readBooks(req, res) {
   res.setHeader("Content-Type", "application/json");
   res.status(200);
   res.send(bookList);
}

// export default app;

module.exports = app;

// app.listen(3000, () => {
//    console.log(`Listening on port 3000...`);
// });

// if (
//    // typeof req.body == "undefined" ||
//    // typeof req.body.title == "undefined" ||
//    // typeof req.body.author == "undefined"
//    !title ||
//    !author
// )
