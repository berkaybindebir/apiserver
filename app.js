const express = require("express");
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");

//import routes in Route folder
const users = require("./routes/users");
const posts = require("./routes/posts");

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

// use routes
app.use("/api/v1/users", users);
app.use("/api/v1/posts", posts);

module.exports = app;
