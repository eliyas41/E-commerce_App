import express from 'express';
import {
  createCategoryCtrl,
  getAllCategoriesCtrl,
  getSingleCategoryCtrl,
  updateCategoryCtrl,
  deleteCategoryCtrl
} from '../controllers/categoriesCtrl.js';
import { isLoggedIn } from '../middlewares/isLoggedIn.js';
import categoryFileUpload from '../config/categoryUpload.js';

const categoriesRoutes = express.Router();

categoriesRoutes.post("/", isLoggedIn, categoryFileUpload.single("file"), createCategoryCtrl);
categoriesRoutes.get("/", getAllCategoriesCtrl);
categoriesRoutes.get("/:id", getSingleCategoryCtrl);
categoriesRoutes.put("/:id", updateCategoryCtrl);
categoriesRoutes.delete("/:id", deleteCategoryCtrl);

export default categoriesRoutes;

