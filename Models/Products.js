const mongoose = require("mongoose");

const ProductsSchema = mongoose.Schema({
  productId: {
    type: String,
    unique: true,
    required: true,
  },

  productType: {
    type: String,
    required: true,
    trim: true,
  },

  title: {
    type: String,
    trim: true,
    required: true,
  },
  brand: String,
  status: {
    type: String,
    enum: ["in-stock", "stock-out", "pre-order", "discontinued"],
  },
  description: {
    type: String,
    trim: true,
  },

  discountPrice: Number,
  regularPrice: Number,

  // Images

  imageURLs: [
    {
      type: String,
      required: true,
    },
  ],

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

  ram: Number,
  ramType: String,
  busSpeed: String,

  // Storage Section

  storageType: String,
  storageCapacity: String,
  hddRPM: String,
  extraM2Slot: String,

  // Graphics

  graphicsModel: {
    type: String,
    trim: true,
  },
  graphicsMemory: {
    type: String,
    trim: true,
  },
  // KeyBoard & Touch Pad

  keyboardType: {
    type: String,
    trim: true,
  },

  touchPad: Boolean,
  // Camera and Audio

  webcam: {
    type: String,
    trim: true,
  },

  speaker: {
    type: String,
    trim: true,
  },
  microPhone: {
    type: String,
    trim: true,
  },

  // Port & Slots

  opticalDrive: {
    type: String,
    trim: true,
  },
  cardReader: {
    type: String,
    trim: true,
  },
  HDMIPort: {
    type: String,
    trim: true,
  },
  USB3Port: {
    type: String,
    trim: true,
  },
  USBTypeCPort_ThunderboltPort: {
    type: String,
    trim: true,
  },

  headPhone_MicroPhonePort: {
    type: String,
    trim: true,
  },

  // Network and Connectivity

  LAN: String,
  Wifi: {
    type: String,
    trim: true,
  },
  bluetooth: Number,

  // Security

  fingerprintSensor: Boolean,
  // Software

  Os: {
    type: String,
    trim: true,
  },

  //Power

  batteryType: {
    string: String,
    trim: true,
  },
  batteryCapacity: Number,
  backupTime: {
    type: String,
    trim: true,
  },

  adapterType: {
    type: String,
    trim: true,
  },

  // Physical Specification

  color: String,
  dimensions: {
    type: String,
    trim: true,
  },
  weight: Number,

  // Warranty

  warrantyDetails: {
    type: String,
    trim: true,
  },
});

const Products = mongoose.model("products", ProductsSchema, "products");

module.exports = Products;
