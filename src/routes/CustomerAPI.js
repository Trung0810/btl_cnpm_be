const express = require("express");
const customerRouterAPI = express.Router();
const {
  getCustomerListController,
  getCustomerByIdController,
  addNewCustomerController,
  handleLoginController,
  updateCustomerController,
  deleteCustomerController,
} = require("../controller/CustomerController");
const authMiddleWare = require("../middleware/AuthMiddleWare");

customerRouterAPI.get("/account", authMiddleWare, (req, res) => {
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
customerRouterAPI.get("/customers", getCustomerListController);
customerRouterAPI.get("/customers/:id", getCustomerByIdController);
customerRouterAPI.post("/customers", addNewCustomerController);
customerRouterAPI.post("/login", handleLoginController);
customerRouterAPI.put("/customers/:id", updateCustomerController);
customerRouterAPI.delete("/customers/:id", deleteCustomerController);

module.exports = customerRouterAPI;
