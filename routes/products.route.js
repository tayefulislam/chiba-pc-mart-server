const express = require("express");

const router = express.Router();
const productsController = require("../Controllers/Products.Controller");

router
  .route("/")
  .get(productsController.getProducts)
  .post(productsController.createProduct);

router.route("/:slugId").get(productsController.getSingleProduct);

module.exports = router;
