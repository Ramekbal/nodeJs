const express = require("express");
const dotenv = require("dotenv").config();

const app = express();

const port = process.env.PORT || 3001;

app.get("/contact", (req, res) => {
  res.send("Runnning...");
});

app.listen(port, () => {
  console.log("Server runnig...", port);
});
