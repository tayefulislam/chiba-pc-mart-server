const express = require("express");

const router = express.Router();
const productsController = require("../Controllers/Products.Controller");

router
  .route("/")
  .get(productsController.getProducts)
  .post(productsController.createProduct);

module.exports = router;
