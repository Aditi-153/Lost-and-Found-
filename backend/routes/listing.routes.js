import express from "express";
import {
  reportLostItem,
  reportFoundItem,
  getItems,
  matchItem,
} from "../controllers/listing.controller";
import { userAuth } from "../middlewares/user.auth.js";
import { upload } from "../utils/cloudinaryStorage.js";

const router = express.Router();

router.post("/lost", userAuth, upload.single("image"), reportLostItem);
router.post("/found", userAuth, upload.single("image"), reportFoundItem);

router.get("/items",userAuth, getItems);

router.post("/match", matchItem); 

export default router;