const express = require("express");
const bodyParser = require("body-parser");
const controllers = require("./controllers");

const app = express();

// CONFIG MIDDLEWARE
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// ROUTER
app.use(function (_, res, next) {
  // res.header("Access-Control-Allow-Origin", "http://localhost:1234");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

app.use(express.static("./dist"));

app.use(controllers);

module.exports = app;