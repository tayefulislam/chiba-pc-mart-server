const Products = require("../Models/Products");

// To Create New Product:

exports.createProductService = async (product) => {
  const result = await Products.create(product);
  return result;
};

// Get All Products

exports.getProductsService = async () => {
  const result = await Products.find({});
  return result;
};

exports.getSingleProductService = async (slugId) => {
  const result = await Products.find({ slug: slugId });
  return result;
};
