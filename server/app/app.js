import express from 'express';
import dotenv from 'dotenv';
dotenv.config();
import dbConnect from '../config/dbConnect.js';
import { globalErrhandler, notFound } from '../middlewares/globalErrHandler.js';
import userRouter from '../routes/usersRoute.js';
import productsRouter from '../routes/productsRoute.js';
import categoriesRouter from '../routes/categoriesRoute.js';
import brandsRouter from "../routes/brandsRoute.js";
import colorRouter from '../routes/colorsRoute.js';

// db connect
dbConnect();
const app = express();
// pass incoming data
app.use(express.json());

// routes
app.use("/api/v1/users", userRouter);
app.use("/api/v1/products", productsRouter);
app.use("/api/v1/categories", categoriesRouter);
app.use("/api/v1/brands/", brandsRouter);
app.use("/api/v1/colors/", colorRouter);

// err middleware
app.use(notFound);
app.use(globalErrhandler)

export default app;