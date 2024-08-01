import express from 'express';
import { createCategoryCtrl } from '../controllers/categoriesCtrl.js';
import { isLoggedIn } from '../middlewares/isLoggedIn.js';

const categoriesRoutes = express.Router();

categoriesRoutes.post("/", isLoggedIn, createCategoryCtrl);

export default categoriesRoutes;