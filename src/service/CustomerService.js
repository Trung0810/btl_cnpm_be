require("dotenv").config();
const Customer = require("../model/Customer");
const { createCartService, deleteCartService } = require("./CartService");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const getCustomerListService = async () => {
  try {
    const customerList = await Customer.find({ role: "customer" });
    console.log("🚀 ~ getCustomerListService ~ customerList:", customerList);

    return customerList;
  } catch (error) {
    console.log("🚀 ~ getCustomerListService ~ error:", error);
    throw error;
  }
};

const getCustomerByIdService = async (id) => {
  try {
    const customer = await Customer.findById(id);
    console.log("🚀 ~ getCustomerByIdService ~ customer:", customer);

    return customer;
  } catch (error) {
    console.log("🚀 ~ getCustomerByIdService ~ error:", error);
    throw error;
  }
};

const addNewCustomerService = async ({
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

    const newCustomer = await Customer.create({
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

    await createCartService(newCustomer._id);

    return newCustomer;
  } catch (error) {
    console.log("🚀 ~ addNewCustomerService ~ error:", error);
    if (error.code === 11000) {
      const field = Object.keys(error.keyPattern)[0];
      throw new Error(`${field} already exists!`);
    }
    throw error;
  }
};

const handleLoginService = async ({ username, password }) => {
  try {
    const customer = await Customer.findOne({ username: username });

    if (customer) {
      const isMatched = await bcrypt.compare(password, customer.password);
      if (isMatched) {
        const payload = {
          username: customer.username,
          customerId: customer._id,
          role: customer.role,
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

const updateCustomerService = async (
  id,
  { fullname, gender, birthday, address, phone, email },
) => {
  try {
    const updatedCustomer = await Customer.findByIdAndUpdate(id, {
      fullname,
      gender,
      birthday,
      address,
      phone,
      email,
    });
    console.log(
      "🚀 ~ updateCustomerService ~ updatedCustomer:",
      updatedCustomer,
    );

    return updatedCustomer;
  } catch (error) {
    console.log("🚀 ~ updateCustomerService ~ error:", error);
    throw error;
  }
};

const deleteCustomerService = async (id) => {
  try {
    const deletedCustomer = await Customer.findByIdAndDelete(id);
    console.log(
      "🚀 ~ deleteCustomerService ~ deletedCustomer:",
      deletedCustomer,
    );

    await deleteCartService(id);

    return deletedCustomer;
  } catch (error) {
    console.log("🚀 ~ deleteCustomerService ~ error:", error);
    throw error;
  }
};

module.exports = {
  getCustomerListService,
  getCustomerByIdService,
  addNewCustomerService,
  handleLoginService,
  updateCustomerService,
  deleteCustomerService,
};
