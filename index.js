const app = require("./app");
const mongoose = require("mongoose");
const port = process.env.PORT || 5000;
require("dotenv").config();

const uri = process.env.URI;

mongoose.connect(uri).then(() => {
  console.log("database connected");
});

app.listen(port, () => {
  console.log("port number", port);
});
