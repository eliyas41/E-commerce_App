import express from 'express';
import dotenv from 'dotenv';
dotenv.config();
import dbConnect from '../config/dbConnect.js';
import { globalErrhandler, notFound } from '../middlewares/globalErrHandler.js';
import userRoutes from '../routes/usersRoute.js';
import productsRouter from '../routes/productsRoute.js';
import categoriesRoutes from '../routes/categoriesRoute.js';
import brandsRouter from "../routes/brandsRoute.js";

// db connect
dbConnect();
const app = express();
// pass incoming data
app.use(express.json());

// routes
app.use("/api/v1/users", userRoutes);
app.use("/api/v1/products", productsRouter);
app.use("/api/v1/categories", categoriesRoutes);
app.use("/api/v1/brands/", brandsRouter);

// err middleware
app.use(notFound);
app.use(globalErrhandler)

export default app;