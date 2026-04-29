const express = require("express");
const orderRouterAPI = express.Router();
const {
  getOrderListController,
  getOrderListByCustomerController,
  getOrderByIdController,
  addNewOrderController,
  updateOrderController,
  deleteOrderController,
} = require("../controller/OrderController");

const authMiddleWare = require("../middleware/AuthMiddleWare");

orderRouterAPI.use(authMiddleWare);
orderRouterAPI.get("/orders", getOrderListController);
orderRouterAPI.get("/orders/customers", getOrderListByCustomerController);
orderRouterAPI.get("/orders/:id", getOrderByIdController);
orderRouterAPI.post("/orders", addNewOrderController);
orderRouterAPI.put("/orders/:id", updateOrderController);
orderRouterAPI.delete("/orders/:id", deleteOrderController);

module.exports = orderRouterAPI;
