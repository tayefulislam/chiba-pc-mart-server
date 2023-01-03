const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("server is runnig");
});

module.exports = app;
