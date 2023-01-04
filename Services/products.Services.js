const Products = require("../Models/Products");

exports.createProductService = async (product) => {
  const result = await Products.create(product);
  return result;
};
