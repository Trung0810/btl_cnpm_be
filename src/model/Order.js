const mongoose = require("mongoose");
const { type } = require("node:os");
const { Schema, model, Types } = mongoose;

const orderSchema = Schema(
  {
    customerId: {
      type: Types.ObjectId,
      ref: "Customer",
      required: true,
    },
    customerName: {
      type: String,
      required: true,
    },
    items: [
      {
        _id: false,
        shoesId: {
          type: Types.ObjectId,
          ref: "Shoes",
          required: true,
        },
        name: {
          type: String,
          required: true,
        },
        quantity: {
          type: Number,
          required: true,
          min: 1,
        },
      },
    ],
    total: {
      type: Number,
      required: true,
      min: 0,
    },
  },
  { timestamps: true },
);

const Order = model("Order", orderSchema);

module.exports = Order;
