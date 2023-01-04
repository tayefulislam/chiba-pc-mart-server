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

  generationOrSeries: {
    type: String,
    trim: true,
  },
  processorFrequency: {
    min: Number,
    max: Number,
  },
  processorCore: Number,
  processTread: Number,
  cupCache: Number,

  // Chipset
  chipsetModel: String,

  // Display

  displaySize: Number,
  displayResolution: String,
  // DisplayFeatures:

  // Ram section
  ram: String,
  ramType: String,
  busSpeed: String,
  // Storage Section
  storageType: String,
  storageCapacity: String,
});
