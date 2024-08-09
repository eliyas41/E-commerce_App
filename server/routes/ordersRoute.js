import express from "express";
import {
  createOrderCtrl,
  getAllOrdersCtrl,
  getSingleOrderCtrl,
  updateOrderCtrl,
  getOrderStatsCtrl
} from "../controllers/orderCtrl.js"

import { isLoggedIn } from "../middlewares/isLoggedIn.js";
const orderRouter = express.Router();

orderRouter.post("/", isLoggedIn, createOrderCtrl);
orderRouter.get("/", isLoggedIn, getAllOrdersCtrl);
orderRouter.get("/sales/sum/stats", isLoggedIn, getOrderStatsCtrl);
orderRouter.put("/update/:id", isLoggedIn, updateOrderCtrl);
orderRouter.get("/:id", isLoggedIn, getSingleOrderCtrl);


export default orderRouter;