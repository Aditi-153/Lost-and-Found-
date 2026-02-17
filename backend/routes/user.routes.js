import express from "express";
import { registerUser , loginUser , userLogout } from "../controllers/user.controller.js";
import { userAuth } from "../middlewares/user.auth.js";

const router = express.Router();
//  http://localhost:3000/user/...
router.post("/register" , registerUser);
router.post("/login" , userAuth , loginUser);
router.get("/logout" , userAuth , userLogout);

export default router;  