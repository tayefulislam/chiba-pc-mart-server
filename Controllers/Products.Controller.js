const {
  createProductService,
  getProductsService,
  getSingleProductService,
} = require("../Services/products.Services");

// To create New Product
exports.createProduct = async (req, res) => {
  try {
    const product = req.body;
    // console.log("product line 10", req.body);
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

// Get Single Product url;

exports.getSingleProduct = async (req, res) => {
  try {
    const slugId = req.params.slugId;
    // console.log(slugId);

    const result = await getSingleProductService(slugId);

    if (result.length === 0) {
      console.log("not found");

      return res.status(404).json({
        status: "success",
        message: "Product not found in the database",
        result: result,
      });
    }

    res.status(200).json({
      status: "success",

      message: "Get Single Product Success",
      result: result,
    });
  } catch (error) {
    res.status(400).json({
      status: "success",
      message: "Something went wrong. Can't get data",
      error: error.message,
    });
  }
};
