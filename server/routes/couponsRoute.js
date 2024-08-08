import express from "express";
import { createCouponCtrl } from "../controllers/couponsCtrl.js";

import { isLoggedIn } from "../middlewares/isLoggedIn.js";
const couponRouter = express.Router();

couponRouter.post("/", isLoggedIn, createCouponCtrl);

export default couponRouter;