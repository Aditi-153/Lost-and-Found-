import express from "express";
import { adminLogin } from "../controllers/admin.controller.js";
import { adminAuth } from "../middlewares/admin.auth.js";

const router = express.Router();

//  http://localhost:3000/admin/...
router.post("/login" , adminLogin);

export default router;
