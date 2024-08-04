import express from "express";
import {
  createColorCtrl,
  deleteColorCtrl,
  getAllColorsCtrl,
  getSingleColorCtrl,
  updateColorCtrl,
} from "../controllers/colorsCtrl.js";

import { isLoggedIn } from "../middlewares/isLoggedIn.js";
const colorRouter = express.Router();

colorRouter.post("/", isLoggedIn, createColorCtrl);
colorRouter.get("/", getAllColorsCtrl);
colorRouter.get("/:id", getSingleColorCtrl);
colorRouter.put("/:id", isLoggedIn, updateColorCtrl);
colorRouter.delete("/:id", isLoggedIn, deleteColorCtrl);

export default colorRouter;