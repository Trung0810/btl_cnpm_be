const Shoes = require("../model/Shoes");
const { attribute, feature, shoesData, newCollection } = require("../Data");

const selectRandomFeatures = () => {
  const shuffled = [...feature].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, 4);
};

const getShoesListService = async ({
  name,
  brand,
  type,
  category,
  rate,
  price,
  sort,
  page,
  limit,
}) => {
  try {
    let filter = {};

    if (name && name !== "") {
      const words = name.trim().split(" ");

      filter.$and = words.map((word) => ({
        name: { $regex: word, $options: "i" },
      }));
    }

    if (brand && brand !== "all") {
      filter.brand = brand;
    }
    if (type && type !== "all") {
      filter.type = type;
    }
    if (category && category !== "all") {
      filter.category = category;
    }

    let sortOption = {};
    if (price === "true") {
      sortOption.price = parseInt(sort);
    }
    if (rate === "true") {
      sortOption.rate = parseInt(sort);
    }

    const skip = (parseInt(page) - 1) * parseInt(limit);

    const shoesList = await Shoes.find(filter)
      .sort(sortOption)
      .skip(skip)
      .limit(parseInt(limit));

    console.log("🚀 ~ getShoesListService ~ shoesList:", shoesList);
    return shoesList;
  } catch (error) {
    console.log("🚀 ~ getShoesListService ~ error:", error);
    throw error;
  }
};

const getShoesByIdService = async (id) => {
  try {
    const shoes = await Shoes.findById(id);
    console.log("🚀 ~ getShoesByIdService ~ shoes:", shoes);

    return shoes;
  } catch (error) {
    console.log("🚀 ~ getShoesByIdService ~ error:", error);
    throw error;
  }
};

const getNewCollectionService = async () => {
  try {
    console.log("🚀 ~ getNewCollectionService ~ newCollection:", newCollection);
    return newCollection;
  } catch (error) {
    console.log("🚀 ~ getNewCollectionService ~ error:", error);
    throw error;
  }
};

const getQuantityService = async ({ name, brand, type, category }) => {
  try {
    let filter = {};

    if (name && name !== "") {
      const words = name.trim().split(" ");

      filter.$and = words.map((word) => ({
        name: { $regex: word, $options: "i" },
      }));
    }

    if (brand && brand !== "all") {
      filter.brand = brand;
    }
    if (type && type !== "all") {
      filter.type = type;
    }
    if (category && category !== "all") {
      filter.category = category;
    }
    const shoesList = await Shoes.find(filter);
    console.log("🚀 ~ getQuantityService ~ shoesList:", shoesList);

    return shoesList.length;
  } catch (error) {
    console.log("🚀 ~ getQuantityService ~ error:", error);
    throw error;
  }
};

const getAllBrandService = () => {
  try {
    const brandList = attribute.brand;

    return brandList;
  } catch (error) {
    throw error;
  }
};

const getAllCategoryService = () => {
  try {
    const categoryList = attribute.category;

    return categoryList;
  } catch (error) {
    throw error;
  }
};

const getAllSortMethodService = () => {
  try {
    const sortMethodList = attribute.sort;

    return sortMethodList;
  } catch (error) {
    throw error;
  }
};

const addNewShoesService = async ({
  name,
  brand,
  image,
  type,
  category,
  description,
  price,
}) => {
  try {
    const newShoes = await Shoes.create({
      name,
      brand,
      image,
      type,
      category,
      color: [
        "White",
        "Black",
        "Gray",
        "Brown",
        "Red",
        "Green",
        "Yellow",
        "Blue",
      ],
      size: [36, 37, 38, 39, 40, 41, 42, 43],
      description,
      features: selectRandomFeatures(),
      price: Number(price),
      comments: [],
      rate: (Math.random() * (5 - 3) + 3).toFixed(1),
    });

    console.log("🚀 ~ addNewShoesService ~ newShoes:", newShoes);
    return newShoes;
  } catch (error) {
    console.log("🚀 ~ addNewShoesService ~ error:", error);
    if (error.code === 11000) {
      const field = Object.keys(error.keyPattern)[0];
      throw new Error(`${field} already exists!`);
    }
    throw error;
  }
};

const updateShoesService = async (
  id,
  { name, brand, image, type, category, description, price },
) => {
  try {
    const updatedShoes = await Shoes.findByIdAndUpdate(
      id,
      {
        name,
        brand,
        image,
        type,
        category,
        description,
        price,
      },
      { new: true },
    );

    console.log("🚀 ~ updateShoesService ~ updatedShoes:", updatedShoes);
    return updatedShoes;
  } catch (error) {
    console.log("🚀 ~ updateShoesService ~ error:", error);
    if (error.code === 11000) {
      const field = Object.keys(error.keyPattern)[0];
      throw new Error(`${field} already exists!`);
    }
    throw error;
  }
};

const deleteShoesService = async (id) => {
  try {
    const deletedShoes = await Shoes.findByIdAndDelete(id);

    console.log("🚀 ~ deleteShoesService ~ deletedShoes:", deletedShoes);
    return deletedShoes;
  } catch (error) {
    console.log("🚀 ~ deleteShoesService ~ error:", error);
    throw error;
  }
};

const deleteAllShoesService = async () => {
  try {
    const result = await Shoes.deleteMany({});
    console.log("🚀 ~ deleteAllShoesService ~ result:", result);
    return result;
  } catch (error) {
    console.log("🚀 ~ deleteAllShoesService ~ error:", error);
    throw error;
  }
};

const seedShoesService = async () => {
  try {
    const shoesToInsert = shoesData.map((shoes) => ({
      name: shoes.name,
      brand: shoes.brand,
      image: shoes.image,
      type: shoes.type,
      category: shoes.category,
      color: [
        "White",
        "Black",
        "Gray",
        "Brown",
        "Red",
        "Green",
        "Yellow",
        "Blue",
      ],
      size: [36, 37, 38, 39, 40, 41, 42, 43],
      description: shoes.description,
      features: selectRandomFeatures(),
      price: Number(shoes.price),
      comments: [],
      rate: (Math.random() * (5 - 3) + 3).toFixed(1),
    }));

    const insertedShoes = await Shoes.insertMany(shoesToInsert);
    console.log("🚀 ~ seedShoesService ~ insertedShoes:", insertedShoes.length);
    return insertedShoes;
  } catch (error) {
    console.log("🚀 ~ seedShoesService ~ error:", error);
    if (error.code === 11000) {
      const field = Object.keys(error.keyPattern)[0];
      throw new Error(`${field} already exists!`);
    }
    throw error;
  }
};

module.exports = {
  getShoesListService,
  getShoesByIdService,
  getNewCollectionService,
  getQuantityService,
  getAllBrandService,
  getAllCategoryService,
  getAllSortMethodService,
  addNewShoesService,
  updateShoesService,
  deleteShoesService,
  deleteAllShoesService,
  seedShoesService,
};
