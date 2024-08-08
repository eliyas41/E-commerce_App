import express from "express";
import {
  createCouponCtrl,
  getAllCouponsCtrl,
  getCouponCtrl,
  updateCouponCtrl,
  deleteCouponCtrl,
} from "../controllers/couponsCtrl.js";

import { isLoggedIn } from "../middlewares/isLoggedIn.js";
const couponRouter = express.Router();

couponRouter.post("/", isLoggedIn, createCouponCtrl);
couponRouter.get("/", getAllCouponsCtrl);
couponRouter.get("/:id", getCouponCtrl);
couponRouter.put("/update/:id", isLoggedIn, updateCouponCtrl);
couponRouter.delete("/delete/:id", isLoggedIn, deleteCouponCtrl);

export default couponRouter;