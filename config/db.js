const mongoose = require("mongoose");
require("dotenv").config();

const dbConnect = () => {
  mongoose
    .connect(process.env.MONGODB_URL)
    .then(() => {
      console.log("Connected to MongoDB");
    })
    .catch("MongoDB connection error");
};

module.exports = dbConnect;
