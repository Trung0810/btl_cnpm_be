const {
  getOrderListService,
  getOrderByIdService,
  addNewOrderService,
  updateOrderService,
  deleteOrderService,
  getOrderListByCustomerService,
} = require("../service/OrderService");

const getOrderListController = async (req, res) => {
  try {
    const result = await getOrderListService();

    return res.status(200).json({
      message: "Get order list successfully!",
      data: result,
    });
  } catch (error) {
    return res.status(400).json({
      error: error.message,
    });
  }
};

const getOrderListByCustomerController = async (req, res) => {
  try {
    const customerId = req.user.customerId;
    const result = await getOrderListByCustomerService(customerId);

    return res.status(200).json({
      message: "Get order list by customer successfully!",
      data: result,
    });
  } catch (error) {
    return res.status(400).json({
      error: error.message,
    });
  }
};

const getOrderByIdController = async (req, res) => {
  try {
    const { id } = req.params;

    const result = await getOrderByIdService(id);

    return res.status(200).json({
      message: "Get order successfully!",
      data: result,
    });
  } catch (error) {
    return res.status(400).json({
      error: error.message,
    });
  }
};

const addNewOrderController = async (req, res) => {
  try {
    const customerId = req.user.customerId;
    const data = req.body;

    const result = await addNewOrderService(customerId, data);

    return res.status(201).json({
      message: "Add new Order successfully!",
      data: result,
    });
  } catch (error) {
    return res.status(400).json({
      error: error.message,
    });
  }
};

const updateOrderController = async (req, res) => {
  try {
    const { id } = req.params;
    const data = req.body;

    const result = await updateOrderService(id, data);

    return res.status(200).json({
      message: "Update Order successfully!",
      data: result,
    });
  } catch (error) {
    return res.status(400).json({
      error: error.message,
    });
  }
};

const deleteOrderController = async (req, res) => {
  try {
    const { id } = req.params;

    const result = await deleteOrderService(id);

    return res.status(200).json({
      message: "Delete Order successfully!",
      data: result,
    });
  } catch (error) {
    return res.status(400).json({
      error: error.message,
    });
  }
};
module.exports = {
  getOrderListController,
  getOrderListByCustomerController,
  getOrderByIdController,
  addNewOrderController,
  updateOrderController,
  deleteOrderController,
};
