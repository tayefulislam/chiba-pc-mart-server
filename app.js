const express = require("express");
const app = express();
const cors = require("cors");

app.use(express.json());
app.use(cors());

const productRoute = require("./routes/products.route");

app.get("/", (req, res) => {
  res.send("server is running");
});

app.use("/api/v1/products", productRoute);
module.exports = app;
