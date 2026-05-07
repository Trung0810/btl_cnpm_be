const {
  registerAccountService,
  loginAccountService,
  getAccountService,
  updateAccountService,
} = require("../service/AccountService");

const registerAccountController = async (req, res) => {
  try {
    const data = req.body;
    console.log("🚀 ~ registerAccountController ~ data:", data);
    const result = await registerAccountService(data);

    return res.status(201).json({
      message: "Register successfully!",
      data: result,
    });
  } catch (error) {
    console.log("🚀 ~ registerAccountController ~ error:", error);
    return res.status(400).json({
      error: error.message,
    });
  }
};

const loginAccountController = async (req, res) => {
  try {
    const data = req.body;
    console.log("🚀 ~ loginAccountController ~ data:", data);
    const result = await loginAccountService(data);
    console.log("🚀 ~ loginAccountController ~ result:", result);

    return res.status(200).json({
      message: "Login successfully!",
      data: result,
    });
  } catch (error) {
    console.log("🚀 ~ loginAccountController ~ error:", error);
    return res.status(400).json({
      error: error.message,
    });
  }
};

const getAccountController = async (req, res) => {
  try {
    const user = req.user;
    const result = await getAccountService(user);

    return res.status(200).json({
      message: "Get account successfully!",
      data: result,
    });
  } catch (error) {
    return res.status(400).json({
      error: error.message,
    });
  }
};

const updateAccountController = async (req, res) => {
  try {
    const { id } = req.params;
    const data = req.body;
    const result = await updateAccountService(id, data);

    return res.status(200).json({
      message: "Update account successfully!",
      data: result,
    });
  } catch (error) {
    return res.status(400).json({
      error: error.message,
    });
  }
};

module.exports = {
  registerAccountController,
  loginAccountController,
  getAccountController,
  updateAccountController,
};
