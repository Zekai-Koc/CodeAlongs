// import request from "supertest";

// import app from "./app.js";

// import supertest from "supertest";

const app = require("../app.js");
const request = require("supertest");

describe("Test example GROUP TESTS 1", () => {
   test("GET /", async () => {
      await request(app)
         .get("/")
         .expect("Content-Type", /json/)
         .expect(200)
         .then((response) => {
            // console.log("----------", response._body[0]);
            expect(response._body[0].id).toEqual(
               "9a2cd641-3bc5-4334-9813-926543e08426"
            );
            expect(response._body[0].author).toEqual("Orhan Pamuk");
            expect(response._body[0].title).toEqual("The White Castle");
         });
   });

   test("GET /", async () => {
      await request(app)
         .get("/")
         .expect("Content-Type", /json/)
         .expect(200)
         .then((response) => {
            // console.log("----------", response._body[0]);
            expect(response._body[1].author).toEqual("Arundhati Roy");
            // expect(response._body[1].title).toEqual("The White Castle");
         });
   });
});

describe("Test example GROUP TESTS 2", () => {
   test("GET /books", async () => {
      await request(app)
         .get("/books")
         .expect("Content-Type", /json/)
         .expect(200)
         .then((response) => {
            // console.log("----------", response._body[0]);
            expect(response._body[0].id).toEqual(
               "9a2cd641-3bc5-4334-9813-926543e08426"
            );
            expect(response._body[0].author).toEqual("Orhan Pamuk");
            expect(response._body[0].title).toEqual("The White Castle");
         });
   });

   test("GET /books", async () => {
      await request(app)
         .get("/books")
         .expect("Content-Type", /json/)
         .expect(200)
         .then((response) => {
            // console.log("----------", response._body[0]);
            expect(response._body[1].author).toEqual("Arundhati Roy");
            // expect(response._body[1].title).toEqual("The White Castle");
         });
   });
});

// const request = supertest(app);

// describe("Test example GROUP TESTS 1", () => {
//    test("GET /", async () => {
//       await request(app)
//          .get("/")
//          .expect("Content-Type", /json/)
//          .expect(200)
//          .then((response) => {
//             // console.log("----------", response._body[0]);
//             expect(response._body[0].author).toEqual("Orhan Pamuk");
//          });
//    });
// });
