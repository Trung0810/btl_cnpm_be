const express = require("express");
const userRouterAPI = express.Router();
const {
  getUserListController,
  getUserByIdController,
  updateUserController,
  deleteUserController,
} = require("../controller/UserController");
const authMiddleWare = require("../middleware/AuthMiddleWare");

userRouterAPI.get("/users", getUserListController);
userRouterAPI.get("/users/:id", getUserByIdController);
userRouterAPI.put("/users/:id", updateUserController);
userRouterAPI.delete("/users/:id", deleteUserController);

module.exports = userRouterAPI;
