const express = require("express");
const path = require("path");

const app = express();
const port = 3030;

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});

app.get("/contact", (req, res) => {
     console.log(`Server is serving contact page`);
  res.sendFile(path.join(__dirname, "public/contact.html"));
});

app.get("/", (req, res) => {
     console.log(`Server is serving home page`);
  res.sendFile(path.join(__dirname, "public/index.html"));
});
