const express = require("express");
const cartRouterAPI = express.Router();
const authMiddleWare = require("../middleware/AuthMiddleWare");
const {
  getCartByCustomerIdController,
  addShoesToCartController,
  updateShoesQuantityController,
  removeShoesFromCartController,
  clearCartController,
  deleteCartController,
} = require("../controller/CartController");

cartRouterAPI.use(authMiddleWare);

cartRouterAPI.get("/carts", getCartByCustomerIdController);
cartRouterAPI.post("/carts/items", addShoesToCartController);
cartRouterAPI.put("/carts/items", updateShoesQuantityController);
cartRouterAPI.delete("/carts/items", removeShoesFromCartController);
cartRouterAPI.delete("/carts/clear", clearCartController);

module.exports = cartRouterAPI;
