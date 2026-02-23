import express from "express";
import { adminLogin , adminLogout, filterListings } from "../controllers/admin.controller.js";
import { adminAuth } from "../middlewares/admin.auth.js";

const router = express.Router();

//  http://localhost:3000/admin/...
router.post("/login" , adminLogin);
router.get("/listings" , adminAuth , filterListings);
router.post("/logout" ,adminAuth , adminLogout )

export default router;
