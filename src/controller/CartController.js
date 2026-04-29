const {
  getCartByCustomerIdService,
  addShoesToCartService,
  updateShoesQuantityService,
  removeShoesFromCartService,
  clearCartService,
} = require("../service/CartService");

const getCartByCustomerIdController = async (req, res) => {
  try {
    const customerId = req.user.customerId;
    const result = await getCartByCustomerIdService(customerId);

    return res.status(200).json({
      message: "Get cart successfully!",
      data: result,
    });
  } catch (error) {
    return res.status(400).json({
      error: error.message,
    });
  }
};

const addShoesToCartController = async (req, res) => {
  try {
    const customerId = req.user.customerId;
    const data = req.body;
    const result = await addShoesToCartService(customerId, data);

    return res.status(201).json({
      message: "Add Shoes to cart successfully!",
      data: result,
    });
  } catch (error) {
    return res.status(400).json({
      error: error.message,
    });
  }
};

const updateShoesQuantityController = async (req, res) => {
  try {
    const customerId = req.user.customerId;
    const data = req.body;
    const result = await updateShoesQuantityService(customerId, data);

    return res.status(200).json({
      message: "Update cart item successfully!",
      data: result,
    });
  } catch (error) {
    return res.status(400).json({
      error: error.message,
    });
  }
};

const removeShoesFromCartController = async (req, res) => {
  try {
    const customerId = req.user.customerId;
    const data = req.body;
    const result = await removeShoesFromCartService(customerId, data);

    return res.status(200).json({
      message: "Remove cart item successfully!",
      data: result,
    });
  } catch (error) {
    return res.status(400).json({
      error: error.message,
    });
  }
};

const clearCartController = async (req, res) => {
  try {
    const customerId = req.user.customerId;
    const result = await clearCartService(customerId);

    return res.status(200).json({
      message: "Clear cart successfully!",
      data: result,
    });
  } catch (error) {
    return res.status(400).json({
      error: error.message,
    });
  }
};

module.exports = {
  getCartByCustomerIdController,
  addShoesToCartController,
  updateShoesQuantityController,
  removeShoesFromCartController,
  clearCartController,
};
