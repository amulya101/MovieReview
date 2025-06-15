//This is a simple Node.js server that serves HTML files based on the request URL without using Express.js.

const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
  console.log(req.url, req.method);
  console.log("Response sent");

  let path = "./views/";

  if (req.url === "/") {
    path += "index.html";
    console.log("Path set to index.html");
    res.statusCode = 200; // Set status code to 200 for success
  } else if (req.url === "/about") {
    path += "about.html";
    res.statusCode = 200; // Set status code to 200 for success
  } else {
    path += "404.html";
    res.statusCode = 404; // Set status code to 404 for not found
  }

  // Set header content type
  res.setHeader("Content-Type", "text/html");

  //Read the file
  fs.readFile(path, (err, data) => {
    console.log("File read completed");
    if (err) {
      console.log(err);
      res.end("Error loading the file");
    } else {
      // Write the response
      res.end(data);
    }
  });
});

server.listen(3000, "localhost", () => {
  console.log("Server is running on http://localhost:3000");
});
