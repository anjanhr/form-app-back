const mongoose = require("mongoose");
require("dotenv").config();

const dbConnect = () => {
  mongoose
    .connect("mongodb+srv://anjanhr1997:Et5ckzaHkpfVBLoh@form-app.eluvugp.mongodb.net/")
    .then(() => {
      console.log("Connected to MongoDB");
    })
    .catch("MongoDB connection error");
};

module.exports = dbConnect;
