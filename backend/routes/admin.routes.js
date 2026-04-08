import express from "express";
import {
  adminLogin,
  adminLogout,
  filterListings,
  getAllListings,
  deleteListing,
} from "../controllers/admin.controller.js";
import { adminAuth } from "../middlewares/admin.auth.js";

const router = express.Router();


router.post("/login", adminLogin);


router.post("/logout", adminAuth, adminLogout);

router.get("/listings", adminAuth, getAllListings);

router.get("/filter", adminAuth, filterListings);

router.delete("/listing/:id", adminAuth, deleteListing);

export default router;