import express from "express";
import bodyParser from "body-parser";

import usersRoutes from "./routes/users.js";

const app = express();

app.use(bodyParser.json());

app.use("/users", usersRoutes);

app.get("/", (req, res) => {
   res.status(200);
   res.send(`Hi there...`);
});

export default app;
