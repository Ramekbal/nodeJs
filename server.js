const express = require("express");
const dotenv = require("dotenv").config();
const contactRoute = require("./routes/contactRoute");

const app = express();

const port = process.env.PORT || 3001;

app.use("/contact", require("./routes/contactRoute"));

app.listen(port, () => {
  console.log("Server runnig...", port);
});
