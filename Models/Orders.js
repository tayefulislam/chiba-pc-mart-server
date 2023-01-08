const mongoose = require("mongoose");

const { ObjectId } = mongoose.Types.ObjectId;
const OrderSchema = mongoose.Schema({
  orderId: {
    type: String,
    trim: true,
    unique: true,
    required: true,
  },
  items: [
    {
      ref: "products",
      uId: ObjectId,
      productId: String,
      unitPrice: Number,
      quantity: Number,
    },
  ],
  //   status:
  total: Number,
  orderDate: String,
});
