const mongoose = require("mongoose");

const ProductsSchema = mongoose.Schema({
  productId: {
    type: String,
    unique: true,
  },
  productType: {
    type: String,
    trim: true,
  },

  slug: {
    type: String,
    trim: true,
  },
  title: {
    type: String,
    trim: true,
  },
  brand: String,
  quantity: {
    type: Number,
    min: 0,
  },
  unit: {
    type: String,
    enum: ["pcs", "kg"],
  },
  status: {
    type: String,
    enum: ["in-stock", "out-of-stock", "pre-order", "discontinued"],
  },
  description: {
    type: String,
    trim: true,
  },
  discountPrice: Number,
  regularPrice: Number,
  // Images
  image1: String,
  image2: String,
  image3: String,
  image4: String,

  // Processor Section
  processorBrand: {
    type: String,
    trim: true,
  },
  processorModel: {
    type: String,
    trim: true,
  },

  // // Ram section
  ram: String,
  ramType: String,

  // Storage Section
  storageType: String,
  storageCapacity: String,

  // Physical Specification
  color: String,
  dimensions: {
    type: String,
    trim: true,
  },
  weight: String,
  // // Warranty
  warrantyDetails: {
    type: String,
    trim: true,
  },
});

const Products = mongoose.model("products", ProductsSchema, "products");

module.exports = Products;
