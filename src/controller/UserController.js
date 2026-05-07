const {
  getUserListService,
  getUserByIdService,
  updateUserService,
  deleteUserService,
} = require("../service/UserService");

const getUserListController = async (req, res) => {
  try {
    const result = await getUserListService();
    return res.status(200).json({
      message: "Get user list successfully!",
      data: result,
    });
  } catch (error) {
    return res.status(400).json({
      error: error.message,
    });
  }
};

const getUserByIdController = async (req, res) => {
  try {
    const { id } = req.params;

    const result = await getUserByIdService(id);

    return res.status(200).json({
      message: "Get user successfully!",
      data: result,
    });
  } catch (error) {
    return res.status(400).json({
      error: error.message,
    });
  }
};

const updateUserController = async (req, res) => {
  try {
    const { id } = req.params;
    const data = req.body;

    const result = await updateUserService(id, data);

    return res.status(200).json({
      message: "Update user successfully!",
      data: result,
    });
  } catch (error) {
    return res.status(400).json({
      error: error.message,
    });
  }
};

const deleteUserController = async (req, res) => {
  try {
    const { id } = req.params;

    const result = await deleteUserService(id);

    return res.status(200).json({
      message: "Delete user successfully!",
      data: result,
    });
  } catch (error) {
    return res.status(400).json({
      error: error.message,
    });
  }
};

module.exports = {
  getUserListController,
  getUserByIdController,
  updateUserController,
  deleteUserController,
};
