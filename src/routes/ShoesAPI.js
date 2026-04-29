const express = require("express");
const shoesRouterAPI = express.Router();
const {
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
} = require("../controller/ShoesController");

shoesRouterAPI.get("/shoes", getShoesListController);
shoesRouterAPI.get("/shoes/:id", getShoesByIdController);
shoesRouterAPI.get("/new-collection", getNewCollectionController);
shoesRouterAPI.get("/quantities", getQuantityController);
shoesRouterAPI.get("/brand", getAllBrandController);
shoesRouterAPI.get("/category", getAllCategoryController);
shoesRouterAPI.get("/sort", getAllSortMethodController);
shoesRouterAPI.post("/shoes", addNewShoesController);
shoesRouterAPI.post("/shoes/seed", seedShoesController);
shoesRouterAPI.delete("/shoes/delete-all", deleteAllShoesController);
shoesRouterAPI.put("/shoes/:id", updateShoesController);
shoesRouterAPI.delete("/shoes/:id", deleteShoesController);

module.exports = shoesRouterAPI;
