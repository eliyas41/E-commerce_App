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
import isAdmin from '../middlewares/isAdmin.js';

const categoriesRoutes = express.Router();

categoriesRoutes.post("/", isLoggedIn, isAdmin, categoryFileUpload.single("file"), createCategoryCtrl);
categoriesRoutes.get("/", getAllCategoriesCtrl);
categoriesRoutes.get("/:id", getSingleCategoryCtrl);
categoriesRoutes.put("/:id", isLoggedIn, isAdmin, updateCategoryCtrl);
categoriesRoutes.delete("/:id", isLoggedIn, isAdmin, deleteCategoryCtrl);

export default categoriesRoutes;

