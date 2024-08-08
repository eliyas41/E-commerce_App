import express from "express";
import {
  createOrderCtrl,
  getAllOrdersCtrl,
  getSingleOrderCtrl,
} from "../controllers/orderCtrl.js"

import { isLoggedIn } from "../middlewares/isLoggedIn.js";
const orderRouter = express.Router();

orderRouter.post("/", isLoggedIn, createOrderCtrl);
orderRouter.get("/", isLoggedIn, getAllOrdersCtrl);
orderRouter.get("/:id", isLoggedIn, getSingleOrderCtrl);


export default orderRouter;