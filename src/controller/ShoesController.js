const {
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
} = require("../service/ShoesService");

const getShoesListController = async (req, res) => {
  try {
    const {
      name = "",
      brand = "all",
      type = "all",
      category = "all",
      rate,
      price,
      sort,
      page = 1,
      limit = 0,
    } = req.query;

    const result = await getShoesListService({
      name,
      brand,
      type,
      category,
      rate,
      price,
      sort,
      page,
      limit,
    });

    return res.status(200).json({
      message: "Get shoes list successfully!",
      data: result,
    });
  } catch (error) {
    return res.status(400).json({
      error: error.message,
    });
  }
};

const getShoesByIdController = async (req, res) => {
  try {
    const { id } = req.params;

    const result = await getShoesByIdService(id);

    return res.status(200).json({
      message: "Get shoes successfully!",
      data: result,
    });
  } catch (error) {
    return res.status(404).json({
      error: error.message,
    });
  }
};

const getNewCollectionController = async (req, res) => {
  try {
    const result = await getNewCollectionService();

    return res.status(200).json({
      message: "Get new collection successfully!",
      data: result,
    });
  } catch (error) {
    return res.status(404).json({
      error: error.message,
    });
  }
};

const getQuantityController = async (req, res) => {
  try {
    const {
      name = "",
      brand = "all",
      type = "all",
      category = "all",
    } = req.query;
    const result = await getQuantityService({ name, brand, type, category });

    return res.status(200).json({
      message: "Get quantity successfully!",
      data: result,
    });
  } catch (error) {
    return res.status(404).json({
      error: error.message,
    });
  }
};

const getAllBrandController = (req, res) => {
  try {
    const result = getAllBrandService();

    return res.status(200).json({
      message: "Get all brand successfully!",
      data: result,
    });
  } catch (error) {
    return res.status(400).json({
      error: error.message,
    });
  }
};

const getAllCategoryController = (req, res) => {
  try {
    const result = getAllCategoryService();

    return res.status(200).json({
      message: "Get all category successfully!",
      data: result,
    });
  } catch (error) {
    return res.status(400).json({
      error: error.message,
    });
  }
};

const getAllSortMethodController = (req, res) => {
  try {
    const result = getAllSortMethodService();

    return res.status(200).json({
      message: "Get all sort method successfully!",
      data: result,
    });
  } catch (error) {
    return res.status(400).json({
      error: error.message,
    });
  }
};

const addNewShoesController = async (req, res) => {
  try {
    const data = req.body;

    const result = await addNewShoesService(data);

    return res.status(201).json({
      message: "Add new shoes successfully!",
      data: result,
    });
  } catch (error) {
    return res.status(400).json({
      error: error.message,
    });
  }
};

const updateShoesController = async (req, res) => {
  try {
    const { id } = req.params;
    const data = req.body;

    const result = await updateShoesService(id, data);

    return res.status(200).json({
      message: "Update shoes successfully!",
      data: result,
    });
  } catch (error) {
    return res.status(400).json({
      error: error.message,
    });
  }
};

const deleteShoesController = async (req, res) => {
  try {
    const { id } = req.params;

    const result = await deleteShoesService(id);

    return res.status(200).json({
      message: "Delete shoes successfully!",
      data: result,
    });
  } catch (error) {
    return res.status(400).json({
      error: error.message,
    });
  }
};

const seedShoesController = async (req, res) => {
  try {
    const result = await seedShoesService();

    return res.status(201).json({
      message: `Seeded ${result.length} shoes successfully!`,
      data: result,
    });
  } catch (error) {
    return res.status(400).json({
      error: error.message,
    });
  }
};

const deleteAllShoesController = async (req, res) => {
  try {
    const result = await deleteAllShoesService();

    return res.status(200).json({
      message: `Deleted ${result.deletedCount} shoes successfully!`,
      data: result,
    });
  } catch (error) {
    return res.status(400).json({
      error: error.message,
    });
  }
};

module.exports = {
  getShoesListController,
  getShoesByIdController,
  getNewCollectionController,
  getQuantityController,
  getAllBrandController,
  getAllCategoryController,
  getAllSortMethodController,
  addNewShoesController,
  updateShoesController,
  deleteShoesController,
  deleteAllShoesController,
  seedShoesController,
};
