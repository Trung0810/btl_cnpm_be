const express = require("express");
const userRouterAPI = express.Router();
const {
  getUserListController,
  getUserByIdController,
  addNewUserController,
  handleLoginController,
  updateUserController,
  deleteUserController,
} = require("../controller/UserController");
const authMiddleWare = require("../middleware/AuthMiddleWare");

userRouterAPI.get("/account", authMiddleWare, (req, res) => {
  try {
    const account = req.user || null;

    return res.status(200).json({
      message: "Get account successfully!",
      data: account,
    });
  } catch (error) {
    return res.status(400).json({
      message: error,
    });
  }
});
userRouterAPI.get("/users", getUserListController);
userRouterAPI.get("/users/:id", getUserByIdController);
userRouterAPI.post("/users", addNewUserController);
userRouterAPI.post("/login", handleLoginController);
userRouterAPI.put("/users/:id", updateUserController);
userRouterAPI.delete("/users/:id", deleteUserController);

module.exports = userRouterAPI;
