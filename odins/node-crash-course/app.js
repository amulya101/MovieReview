//This is a simple Node.js server that serves HTML files based on the request URL that uses Express.js.

const express = require("express");

const app = express();
//Template engine setup
app.set("view engine", "ejs");

app.listen(3000);

app.get("/", (req, res) => {
  res.render("index");
});

app.get("/about", (req, res) => {
  res.render("about");
});

app.get("/blogs/create", (req, res) => {
  res.render("create");
});

app.use((req, res) => {
  res.status(404).render("404");
});
