const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const shoesSchema = Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true,
    },
    brand: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
      unique: true,
    },
    color: {
      type: [String],
      required: true,
      validate: (v) => v.length > 0,
    },
    size: {
      type: [Number],
      required: true,
      validate: (v) => v.length > 0,
    },
    type: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    features: {
      type: [String],
      required: true,
    },
    price: {
      type: Number,
      required: true,
      min: 0,
    },
    comments: {
      type: [String],
    },
    rate: {
      type: Number,
      required: true,
      min: 3,
      max: 5,
    },
  },
  {
    timestamps: true,
  },
);

const Shoes = model("Shoes", shoesSchema);

module.exports = Shoes;
