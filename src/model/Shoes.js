const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const shoesSchema = Schema({
  name: String,
  img: String,
  brand: String,
  color: String,
  size: Number,
  description: String,
  cost: Number,
  rate: Number,
});

const Shoes = model("shoes", shoesSchema);

module.exports = Shoes;
