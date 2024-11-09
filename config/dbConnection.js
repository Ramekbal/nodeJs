const mongoose = require("mongoose");

const dbconnect = async () => {
  try {
    await mongoose.connect(process.env.CONNECTION_STRING);
    console.log("MongoDB connected2");
    console.log(mongoose.connection.host);
    console.log(mongoose.connection.name);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

module.exports = dbconnect;
