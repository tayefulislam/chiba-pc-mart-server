const mongoose = require("mongoose");

const { ObjectId } = mongoose.Types.ObjectId;
const OrderSchema = mongoose.Schema({
  orderId: {
    type: String,
    trim: true,
    unique: true,
    required: true,
  },
  orderUserId: {
    type: ObjectId,
    ref: "users",
  },

  items: [
    {
      ref: "products",
      uId: ObjectId,
      productId: String,
      productName: String,
      unitPrice: Number,
      quantity: Number,
      required: true,
    },
  ],
  //   status:
  totalAmount: Number,
  orderDate: String,
  shipingName: {
    type: String,
    required: true,
  },

  shipingAddress: {
    type: String,
    required: true,
  },

  addressInDetail: {
    type: String,
    required: true,
  },
  city: String,
  state: String,
  order: String,
  country: String,
  phoneNumber: String,
  emailAddress: String,
  orderTrackingNumber: String,
  deliveryTime: String,
  deliveryStatus: String,
  paymentStatus: String,
});
