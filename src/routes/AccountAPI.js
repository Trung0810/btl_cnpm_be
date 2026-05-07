const express = require("express");
const accountRouterAPI = express.Router();
const {
  registerAccountController,
  loginAccountController,
  getAccountController,
  updateAccountController,
} = require("../controller/AccountController");
const authMiddleWare = require("../middleware/AuthMiddleWare");

accountRouterAPI.get("/account", authMiddleWare, getAccountController);
accountRouterAPI.post("/register", registerAccountController);
accountRouterAPI.post("/login", loginAccountController);
accountRouterAPI.put("/account/:id", authMiddleWare, updateAccountController);

module.exports = accountRouterAPI;
