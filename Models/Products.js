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

  image1: {
    type: String,
    trim: true,
  },

  image2: {
    type: String,
    trim: true,
  },

  image3: {
    type: String,
    trim: true,
  },

  image4: {
    type: String,
    trim: true,
  },

  // Processor Section
  processorBrand: {
    type: String,
    trim: true,
  },
  processorModel: {
    type: String,
    trim: true,
  },
  generationOrSeries: String,
  processorFrequencyMin: Number,

  processorFrequencyMax: Number,
  processorCore: Number,
  processTread: Number,
  cupCache: {
    type: String,
    trim: true,
  },
  // // Chipset
  chipsetModel: String,
  // // Display
  displaySize: Number,
  displayResolution: String,
  displayFeatures: {
    type: String,
    trim: true,
  },
  // // Ram section
  ram: String,
  ramType: String,
  busSpeed: String,
  maxRAMCapacity: String,
  ramRemovable: String,
  totalRAMSlot: String,
  // Storage Section
  storageType: String,
  storageCapacity: String,
  hddRPM: String,
  extraM2Slot: String,
  supportedSSDType: String,

  // // Graphics
  graphicsModel: {
    type: String,
    trim: true,
  },
  graphicsMemory: {
    type: String,
    trim: true,
  },
  // // KeyBoard & Touch Pad
  keyboardType: {
    type: String,
    trim: true,
  },
  keyboardFeatures: {
    type: String,
    trim: true,
  },
  touchPad: String,
  touchPadFeatures: {
    type: String,
    trim: true,
  },
  // // Camera and Audio
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
  // // Port & Slots
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
  // // Network and Connectivity
  LAN: String,
  Wifi: {
    type: String,
    trim: true,
  },
  bluetooth: String,
  // // Security
  fingerprintSensor: Boolean,
  // // Software
  Os: {
    type: String,
    trim: true,
  },
  // //Power #problem 1
  batteryType: {
    type: String,
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
  // // Physical Specification
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
