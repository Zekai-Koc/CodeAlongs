const express = require("express");

const stripe = require("stripe")(
   "sk_test_51NFtNFH1SAIsByZfe16j96Qceq9tWBxus6dukp4uqQfByCvJdiUTcluuzZqZJ3DW7Lc7e7SY7uP6FEKVl8cVMMvQ00T84hNqnm"
);
const bodyParser = require("body-parser");
// const exphbs = require("express-handlebars");
const { engine } = require("express-handlebars");

const app = express();

// Handlebars Middleware
app.engine("handlebars", engine());

app.set("view engine", "handlebars");
app.set("views", "./views");

// Body Parser Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Set Static Folder
app.use(express.static(`${__dirname}/public`));

app.get("/", (res, req) => {
   res.render("index");
});

const port = process.env.PORT || 5000;

app.listen(port, () => {
   console.log(`Server started on port: ${port}`);
});
