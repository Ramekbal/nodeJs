const express = require("express");
const dotenv = require("dotenv").config();
const contactRoute = require("./routes/contactRoute");
const errorHandler = require("./middleware/errorHandler");
const dbconnect = require("./config/dbConnection");

dbconnect();
const app = express();

const port = process.env.PORT || 3001;

app.use(express.json());
app.use("/contact", require("./routes/contactRoute"));
app.use(errorHandler);

app.listen(port, () => {
  console.log("Server runnig...", port);
});
