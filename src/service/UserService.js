require("dotenv").config();
const User = require("../model/User");
const { createCartService, deleteCartService } = require("./CartService");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const getUserListService = async () => {
  try {
    const userList = await User.find({ role: "customer" });
    console.log("🚀 ~ getUserListService ~ userList:", userList);

    return userList;
  } catch (error) {
    console.log("🚀 ~ getUserListService ~ error:", error);
    throw error;
  }
};

const getUserByIdService = async (id) => {
  try {
    const user = await User.findById(id);
    console.log("🚀 ~ getUserByIdService ~ user:", user);

    return user;
  } catch (error) {
    console.log("🚀 ~ getUserByIdService ~ error:", error);
    throw error;
  }
};

const addNewUserService = async ({
  username,
  password,
  fullname,
  birthday,
  gender,
  email,
  phone,
  address,
}) => {
  try {
    const hashPassword = await bcrypt.hash(password, 10);

    const newUser = await User.create({
      username,
      password: hashPassword,
      fullname,
      birthday,
      gender,
      email,
      phone,
      address,
      role: "customer",
    });

    await createCartService(newUser._id);

    return newUser;
  } catch (error) {
    console.log("🚀 ~ addNewUserService ~ error:", error);
    if (error.code === 11000) {
      const field = Object.keys(error.keyPattern)[0];
      throw new Error(`${field} already exists!`);
    }
    throw error;
  }
};

const handleLoginService = async ({ username, password }) => {
  try {
    const user = await User.findOne({ username: username });

    if (user) {
      const isMatched = await bcrypt.compare(password, user.password);
      if (isMatched) {
        const payload = {
          username: user.username,
          userId: user._id,
          role: user.role,
        };

        const accessToken = jwt.sign(payload, process.env.JWT_SECRET, {
          expiresIn: process.env.JWT_EXPIRESIN,
        });

        return {
          accessToken,
          payload,
        };
      } else {
        throw new Error("Username or password incorrect!");
      }
    } else {
      throw new Error("Username or password incorrect!");
    }
  } catch (error) {
    console.log("🚀 ~ handleLoginService ~ error:", error);
    throw error;
  }
};

const updateUserService = async (
  id,
  { fullname, gender, birthday, address, phone, email },
) => {
  try {
    const updatedUser = await User.findByIdAndUpdate(id, {
      fullname,
      gender,
      birthday,
      address,
      phone,
      email,
    });
    console.log("🚀 ~ updateUserService ~ updatedUser:", updatedUser);

    return updatedUser;
  } catch (error) {
    console.log("🚀 ~ updateUserService ~ error:", error);
    throw error;
  }
};

const deleteUserService = async (id) => {
  try {
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
  getUserListService,
  getUserByIdService,
  addNewUserService,
  handleLoginService,
  updateUserService,
  deleteUserService,
};
