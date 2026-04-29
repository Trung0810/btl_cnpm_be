const Cart = require("../model/Cart");

const createCartService = async (customerId) => {
  try {
    const newCart = await Cart.create({ customerId, items: [], total: 0 });
    console.log("🚀 ~ createCartService ~ newCart:", newCart);

    return newCart;
  } catch (error) {
    console.log("🚀 ~ createCartService ~ error:", error);
    throw error;
  }
};

const getCartByCustomerIdService = async (customerId) => {
  try {
    const cart = await Cart.findOne({ customerId });
    console.log("🚀 ~ getCartByCustomerIdService ~ cart:", cart);

    return cart;
  } catch (error) {
    console.log("🚀 ~ getCartByCustomerIdService ~ error:", error);
    throw error;
  }
};

const addShoesToCartService = async (
  customerId,
  { shoesId, name, image, brand, type, category, color, size, quantity, price },
) => {
  try {
    const cart = await Cart.findOne({ customerId });
    const itemData = {
      shoesId,
      name,
      image,
      brand,
      type,
      category,
      color,
      size,
      quantity,
      price,
    };

    const existingItem = cart.items.find(
      (item) =>
        item.shoesId.toString() === shoesId &&
        item.color === color &&
        item.size === Number(size),
    );

    if (existingItem) {
      existingItem.quantity += Number(quantity);
      cart.total += Number(quantity) * Number(price);
    } else {
      cart.items.push(itemData);
      cart.total += Number(price);
    }

    await cart.save();
    console.log("🚀 ~ addShoesToCartService ~ cart:", cart);

    return cart;
  } catch (error) {
    console.log("🚀 ~ addShoesToCartService ~ error:", error);
    throw error;
  }
};

const updateShoesQuantityService = async (
  customerId,
  { shoesId, color, size, quantity },
) => {
  try {
    const cart = await Cart.findOne({ customerId });

    const existingItem = cart.items.find(
      (item) =>
        item.shoesId.toString() === shoesId &&
        item.color === color &&
        item.size === Number(size),
    );

    cart.total +=
      (Number(quantity) - existingItem.quantity) * existingItem.price;

    existingItem.quantity = Number(quantity);

    await cart.save();
    console.log("🚀 ~ updateShoesQuantityService ~ cart:", cart);

    return cart;
  } catch (error) {
    console.log("🚀 ~ updateShoesQuantityService ~ error:", error);
    throw error;
  }
};

const removeShoesFromCartService = async (
  customerId,
  { shoesId, color, size },
) => {
  try {
    const cart = await Cart.findOne({ customerId });

    const existingItem = cart.items.find(
      (item) =>
        item.shoesId.toString() === shoesId &&
        item.color === color &&
        item.size === Number(size),
    );

    cart.total -= existingItem.quantity * existingItem.price;

    cart.items = cart.items.filter(
      (item) =>
        !(
          item.shoesId.toString() === shoesId &&
          item.color === color &&
          item.size === Number(size)
        ),
    );

    await cart.save();
    console.log("🚀 ~ removeShoesFromCartService ~ cart:", cart);

    return cart;
  } catch (error) {
    console.log("🚀 ~ removeShoesFromCartService ~ error:", error);
    throw error;
  }
};

const clearCartService = async (customerId) => {
  try {
    const cart = await Cart.findOne({ customerId });

    cart.items = [];
    cart.total = 0;
    await cart.save();

    return cart;
  } catch (error) {
    console.log("🚀 ~ clearCartService ~ error:", error);
    throw error;
  }
};

const deleteCartService = async (customerId) => {
  try {
    const deletedCart = await Cart.deleteOne({ customerId });
    console.log("🚀 ~ deleteCartService ~ deletedCart:", deletedCart);

    return deletedCart;
  } catch (error) {
    console.log("🚀 ~ deleteCartService ~ error:", error);
    throw error;
  }
};

module.exports = {
  createCartService,
  getCartByCustomerIdService,
  addShoesToCartService,
  updateShoesQuantityService,
  removeShoesFromCartService,
  clearCartService,
  deleteCartService,
};
