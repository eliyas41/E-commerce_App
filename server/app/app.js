import express from 'express';
import dotenv from 'dotenv';
dotenv.config();
import dbConnect from '../config/dbConnect.js';

// db connect
dbConnect();

const app = express();

export default app;