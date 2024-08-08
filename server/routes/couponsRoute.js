import express from "express";
import { createCouponCtrl, getAllCouponsCtrl } from "../controllers/couponsCtrl.js";

import { isLoggedIn } from "../middlewares/isLoggedIn.js";
const couponRouter = express.Router();

couponRouter.post("/", isLoggedIn, createCouponCtrl);
couponRouter.get("/", getAllCouponsCtrl);

export default couponRouter;