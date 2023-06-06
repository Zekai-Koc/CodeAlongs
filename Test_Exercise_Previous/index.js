// import express from "express";
// import bodyParser from "body-parser";

// import usersRoutes from "./routes/users.js";

// const app = express();
// const PORT = process.env.PORT || 3000;

// app.use(bodyParser.json());

// app.use("/users", usersRoutes);

// app.get("/", (req, res) => {
//    res.send(`Hi there...`);
// });

// REQUEST     METHOD      ENDPOINT       FUNCTION
// Read        GET         /users         returns all users.
// Create      POST        /users         create a user
// Read        GET         /users/:id     return the user with the specific id
// Delete      DELETE      /users/:id     deletes the user with the specific id
// Update      PATCH       /users/:id     updates the user with the specific id

import app from "./app.js";

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
   console.log(`Server started listening on port http://localhost:${PORT}`);
});
