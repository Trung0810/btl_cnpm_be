require("dotenv").config();
const User = require("../model/User");
const Account = require("../model/Account");
const { createCartService, deleteCartService } = require("./CartService");

const createUserService = async ({
  fullname,
  birthday,
  gender,
  email,
  phone,
  address,
  role = "customer",
}) => {
  try {
    const newUser = await User.create({
      fullname,
      birthday,
      gender,
      email,
      phone,
      address,
      role,
    });

    console.log("🚀 ~ createUserService ~ newUser:", newUser);
    return newUser;
  } catch (error) {
    console.log("🚀 ~ createUserService ~ error:", error);
    if (error.code === 11000) {
      const field = Object.keys(error.keyPattern)[0];
      throw new Error(`${field} already exists!`);
    }
    throw error;
  }
};

const getUserListService = async () => {
  try {
    const userList = await User.find({ role: "customer" }).populate(
      "accountId",
    );
    console.log("🚀 ~ getUserListService ~ userList:", userList);

    return userList;
  } catch (error) {
    console.log("🚀 ~ getUserListService ~ error:", error);
    throw error;
  }
};

const getUserByIdService = async (id) => {
  try {
    const user = await User.findById(id).populate("accountId");
    console.log("🚀 ~ getUserByIdService ~ user:", user);

    return user;
  } catch (error) {
    console.log("🚀 ~ getUserByIdService ~ error:", error);
    throw error;
  }
};

const updateUserService = async (
  id,
  { fullname, gender, birthday, address, phone, email },
) => {
  try {
    const updatedUser = await User.findByIdAndUpdate(
      id,
      {
        fullname,
        gender,
        birthday,
        address,
        phone,
        email,
      },
      { new: true },
    ).populate("accountId");
    console.log("🚀 ~ updateUserService ~ updatedUser:", updatedUser);

    return updatedUser;
  } catch (error) {
    console.log("🚀 ~ updateUserService ~ error:", error);
    throw error;
  }
};

const deleteUserService = async (id) => {
  try {
    const user = await User.findById(id);

    await Account.findByIdAndDelete(user.accountId);

    const deletedUser = await User.findByIdAndDelete(id);
    console.log("🚀 ~ deleteUserService ~ deletedUser:", deletedUser);

    await deleteCartService(id);

    return deletedUser;
  } catch (error) {
    console.log("🚀 ~ deleteUserService ~ error:", error);
    throw error;
  }
};

module.exports = {
  createUserService,
  getUserListService,
  getUserByIdService,
  updateUserService,
  deleteUserService,
};
