const {
  getCustomerListService,
  getCustomerByIdService,
  addNewCustomerService,
  handleLoginService,
  updateCustomerService,
  deleteCustomerService,
} = require("../service/CustomerService");

const getCustomerListController = async (req, res) => {
  try {
    const result = await getCustomerListService();
    return res.status(200).json({
      message: "Get customer list successfully!",
      data: result,
    });
  } catch (error) {
    return res.status(400).json({
      error: error.message,
    });
  }
};

const getCustomerByIdController = async (req, res) => {
  try {
    const { id } = req.params;

    const result = await getCustomerByIdService(id);

    return res.status(200).json({
      message: "Get customer successfully!",
      data: result,
    });
  } catch (error) {
    return res.status(400).json({
      error: error.message,
    });
  }
};

const addNewCustomerController = async (req, res) => {
  try {
    const data = req.body;
    const result = await addNewCustomerService(data);

    return res.status(201).json({
      message: "Add new customer successfully!",
      data: result,
    });
  } catch (error) {
    console.log("🚀 ~ addNewCustomerController ~ error:", error);
    return res.status(400).json({
      error: error.message,
    });
  }
};

const handleLoginController = async (req, res) => {
  try {
    const data = req.body;
    const result = await handleLoginService(data);

    return res.status(200).json({
      message: "Login successfully!",
      data: result,
    });
  } catch (error) {
    console.log("🚀 ~ handleLoginController ~ error:", error);
    return res.status(400).json({
      error: error.message,
    });
  }
};

const updateCustomerController = async (req, res) => {
  try {
    const { id } = req.params;
    const data = req.body;

    const result = await updateCustomerService(id, data);

    return res.status(200).json({
      message: "Update customer successfully!",
      data: result,
    });
  } catch (error) {
    return res.status(400).json({
      error: error.message,
    });
  }
};

const deleteCustomerController = async (req, res) => {
  try {
    const { id } = req.params;

    const result = await deleteCustomerService(id);

    return res.status(200).json({
      message: "Delete customer successfully!",
      data: result,
    });
  } catch (error) {
    return res.status(400).json({
      error: error.message,
    });
  }
};

module.exports = {
  getCustomerListController,
  getCustomerByIdController,
  addNewCustomerController,
  handleLoginController,
  updateCustomerController,
  deleteCustomerController,
};
