const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const customerSchema = Schema({
  name: String,
});
