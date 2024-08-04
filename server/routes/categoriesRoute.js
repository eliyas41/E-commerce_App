import express from 'express';
import {
  createCategoryCtrl,
  getAllCategoriesCtrl,
  getSingleCategoryCtrl,
  updateCategoryCtrl,
  deleteCategoryCtrl
} from '../controllers/categoriesCtrl.js';
import { isLoggedIn } from '../middlewares/isLoggedIn.js';

const categoriesRoutes = express.Router();

categoriesRoutes.post("/", isLoggedIn, createCategoryCtrl);
categoriesRoutes.get("/", getAllCategoriesCtrl);
categoriesRoutes.get("/:id", getSingleCategoryCtrl);
categoriesRoutes.put("/:id", updateCategoryCtrl);
categoriesRoutes.delete("/:id", deleteCategoryCtrl);

export default categoriesRoutes;

