const mongoose = require("mongoose");
const { category } = require("../Data");
const { type } = require("node:os");
const { Schema, model, Types } = mongoose;

const cartSchema = new Schema(
  {
    customerId: {
      type: Types.ObjectId,
      ref: "User",
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
        image: {
          type: String,
          required: true,
        },
        brand: {
          type: String,
          required: true,
        },
        type: {
          type: String,
          required: true,
        },
        category: {
          type: String,
          required: true,
        },
        color: {
          type: String,
          required: true,
        },
        size: {
          type: Number,
          required: true,
        },
        quantity: {
          type: Number,
          required: true,
          min: 1,
        },
        price: {
          type: String,
          required: true,
          min: 0,
        },
      },
    ],
    total: {
      type: Number,
      required: true,
      min: 0,
    },
  },
  {
    timestamps: true,
  },
);

const Cart = model("Cart", cartSchema);

module.exports = Cart;
