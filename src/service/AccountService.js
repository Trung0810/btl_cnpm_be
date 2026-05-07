require("dotenv").config();
const Account = require("../model/Account");
const User = require("../model/User");
const { createCartService } = require("./CartService");
const { createUserService } = require("./UserService");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const registerAccountService = async ({
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
    console.log("count 1");

    const newUser = await createUserService({
      fullname,
      birthday,
      gender,
      email,
      phone,
      address,
      role: "customer",
    });
    console.log("count 2");

    const newAccount = await Account.create({
      username,
      password: hashPassword,
      userId: newUser._id,
    });
    console.log("count 3");

    const updatedUser = await User.findByIdAndUpdate(
      newUser._id,
      { accountId: newAccount._id },
      { new: true },
    );
    console.log("count 4");

    await createCartService(newUser._id);

    return {
      account: newAccount,
      user: updatedUser,
    };
  } catch (error) {
    console.log("🚀 ~ registerAccountService ~ error:", error);
    if (error.code === 11000) {
      const field = Object.keys(error.keyPattern)[0];
      throw new Error(`${field} already exists!`);
    }
    throw error;
  }
};

const loginAccountService = async ({ username, password }) => {
  try {
    const account = await Account.findOne({ username });
    console.log("🚀 ~ loginAccountService ~ account:", account);

    if (!account) {
      throw new Error("Username or password is incorrect!");
    }

    const isMatched = await bcrypt.compare(password, account.password);
    if (!isMatched) {
      throw new Error("Username or password is incorrect!");
    }

    const user = await User.findById(account.userId);

    const payload = {
      username: account.username,
      accountId: account._id,
      userId: user._id,
      role: user.role,
    };

    const token = jwt.sign(payload, process.env.JWT_SECRET, {
      expiresIn: process.env.JWT_EXPIRESIN,
    });

    return {
      token,
      payload,
    };
  } catch (error) {
    console.log("🚀 ~ loginAccountService ~ error:", error);
    throw error;
  }
};

const getAccountService = async (user) => {
  try {
    const account = await Account.findById(user.accountId);
    const infor = {
      username: account.username,
      role: user.role,
    };

    return infor;
  } catch (error) {
    console.log("🚀 ~ getAccountByIdService ~ error:", error);
    throw error;
  }
};

const updateAccountService = async (accountId, { password }) => {
  try {
    if (!password) {
      throw new Error("Password is required!");
    }

    const hashPassword = await bcrypt.hash(password, 10);
    const updatedAccount = await Account.findByIdAndUpdate(
      accountId,
      { password: hashPassword },
      { new: true },
    ).populate("userId");

    return updatedAccount;
  } catch (error) {
    console.log("🚀 ~ updateAccountService ~ error:", error);
    throw error;
  }
};

module.exports = {
  registerAccountService,
  loginAccountService,
  getAccountService,
  updateAccountService,
};
