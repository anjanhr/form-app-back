const express = require("express");
const app = express();
require("dotenv").config();
const cors = require("cors");
const dbConnect = require("./config/db");
const routes = require("./routes");
const port = process.env.PORT || 5500;
const path = require("path");

app.use(cors());
app.use(express.json());

dbConnect();
app.use("/api", routes);

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("Something broke!");
});

app.listen(port, () => {
  console.log(`Server is running on Port: ${port}`);
});
