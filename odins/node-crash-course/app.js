//This is a simple Node.js server that serves HTML files based on the request URL that uses Express.js.
// It uses EJS as the template engine to render views.

const express = require("express");
const mongoose = require("mongoose");

const Blog = require("./models/node_blogs");

const app = express();

const dbURI = null; // Replace with your MongoDB connection string later
mongoose.connect(dbURI)
  .then((resolved) => {
    console.log("Connected to MongoDB");
    app.listen(3000);
  })
  .catch((err) => {
    console.log("Error connecting to MongoDB:", err);
  });

//Template engine setup
app.set("view engine", "ejs");

app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  Blog.find()
    .then((result) => {
      res.render("index", { blogs: result });
    })
    .catch((err) => {
      console.log("Error fetching blogs:", err);
      res.status(500).send("Error fetching blogs");
    });
});

app.post("/blogs", (req, res) => {
  const blog = new Blog(req.body);

  blog.save()
  .then((result) => {
    console.log("Blog saved successfully:", result);
  }).catch((err) => {
    console.log("Error saving blog:", err);
    res.status(500).send("Error saving blog");
  });  
})



app.get("/about", (req, res) => {
  res.render("about");
});

app.get("/blogs/create", (req, res) => {
  res.render("create");
});

app.get("/blogs/:id", (req, res) => {
  const id = req.params.id;
  Blog.findById(id)
    .then((result) => {
      if (result) {
        res.render("details", { blog: result });
      } else {
        res.status(404).render("404");
      }
    })
    .catch((err) => {
      console.log("Error fetching blog:", err);
      res.status(500).send("Error fetching blog");
    });
});

app.use((req, res) => {
  res.status(404).render("404");
});
