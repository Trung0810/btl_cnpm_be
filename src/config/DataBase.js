require("dotenv").config();
const mongoose = require("mongoose");
const { connect } = mongoose;

const url = process.env.DB_URL;

const connection = async () => {
  try {
    await connect(url);
    console.log("Connected successfully!");
  } catch (error) {
    console.log("Connected failed");
  }
};

module.exports = connection;
