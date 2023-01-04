const mongoose = require("mongoose");

const ProductsSchema = mongoose.Schema({
  title: {
    type: String,
    trim: true,
  },
  brand: String,
  description: {
    type: String,
    trim: true,
  },
  productId: {
    type: String,
    unique: true,
  },
  discountPrice: Number,
  regularPrice: Number,

  // Processor Section
  processorType: {
    type: String,
    trim: true,
  },

  processorModel: {
    type: String,
    trim: true,
  },

  // Ram section
  ram: String,
  ramType: String,
  busSpeed: String,
  storageType: String,
  storageCapacity: String,
});
