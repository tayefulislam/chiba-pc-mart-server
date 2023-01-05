const {
  createProductService,
  getProductsService,
} = require("../Services/products.Services");

// To create New Product
exports.createProduct = async (req, res) => {
  try {
    const product = req.body;
    console.log("products", req.body);
    const result = await createProductService(product);
    res.status(200).json({
      status: "success",
      result: result,
      message: "Product Added Successfully",
    });
  } catch (error) {
    res.status(400).json({
      status: "fail",
      message: "Product can't added",
      error: error.message,
    });
  }
};

// To get all product data
exports.getProducts = async (req, res) => {
  try {
    const result = await getProductsService();

    res.status(200).json({
      status: "success",
      result: result,
      message: "Get all product successfully",
    });
  } catch (error) {
    res.status(400).json({
      status: "fail",
      message: "Can't get products data from database",
      error: error.message,
    });
  }
};
