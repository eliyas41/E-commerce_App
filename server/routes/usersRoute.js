import express from 'express';
import { registerUserCtrl, loginUserCtrl, getUserProfileCtrl } from '../controllers/usersCtrl.js';

const userRoutes = express.Router();

userRoutes.post("/register", registerUserCtrl);
userRoutes.post("/login", loginUserCtrl);
userRoutes.get('/profile', getUserProfileCtrl)


export default userRoutes;