const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const userSchema = Schema(
  {
    fullname: {
      type: String,
      required: true,
    },
    birthday: {
      type: Date,
      required: true,
    },
    gender: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    phone: {
      type: String,
      required: true,
      unique: true,
    },
    address: {
      type: String,
      required: true,
    },
    role: {
      type: String,
      required: true,
    },
    accountId: {
      type: Schema.Types.ObjectId,
      ref: "Account",
    },
  },
  { timestamps: true },
);

const User = model("User", userSchema);

module.exports = User;
