const { Types } = require("mongoose");
const Customer = require("../model/Customer");
const Order = require("../model/Order");

const getOrderListService = async () => {
  try {
    const orderList = await Order.find({});

    console.log("🚀 ~ getOrderListService ~ OrderList:", orderList);
    return orderList;
  } catch (error) {
    console.log("🚀 ~ getOrderListService ~ error:", error);
    throw error;
  }
};

const getOrderListByCustomerService = async (customerId) => {
  try {
    const orderList = await Order.find({ customerId: customerId });

    console.log("🚀 ~ getOrderListByCustomerService ~ OrderList:", orderList);
    return orderList;
  } catch (error) {
    console.log("🚀 ~ getOrderListByCustomerService ~ error:", error);
    throw error;
  }
};

const getOrderByIdService = async (id) => {
  try {
    const order = await Order.findById(id);
    console.log("🚀 ~ getOrderByIdService ~ order:", order);

    return order;
  } catch (error) {
    console.log("🚀 ~ getOrderByIdService ~ e:", e);
    throw e;
  }
};

const addNewOrderService = async (customerId, { items, total }) => {
  try {
    const customer = await Customer.findById(customerId);
    console.log("🚀 ~ addNewOrderService ~ customer:", customer);
    const { fullname } = customer;
    const newOrder = await Order.create({
      customerId,
      customerName: fullname,
      items,
      total,
    });

    console.log("🚀 ~ addNewOrderService ~ newOrder:", newOrder);
    return newOrder;
  } catch (error) {
    console.log("🚀 ~ addNewOrderService ~ error:", error);
    throw error;
  }
};

const updateOrderService = async (id, { items, total }) => {
  try {
    const updatedOrder = await Order.findByIdAndUpdate(
      id,
      {
        items,
        total,
      },
      { new: true },
    );

    console.log("🚀 ~ updateOrderService ~ updatedOrder:", updatedOrder);
    return updatedOrder;
  } catch (error) {
    console.log("🚀 ~ updateOrderService ~ error:", error);
    throw error;
  }
};

const deleteOrderServeice = async (id) => {
  try {
    const deletedOrder = await Order.findByIdAndDelete(id);

    console.log("🚀 ~ deleteOrderServeice ~ deletedOrder:", deletedOrder);
    return deletedOrder;
  } catch (error) {
    console.log("🚀 ~ deleteOrderServeice ~ error:", error);
    throw error;
  }
};

module.exports = {
  getOrderListService,
  getOrderListByCustomerService,
  getOrderByIdService,
  addNewOrderService,
  updateOrderService,
  deleteOrderServeice,
};
