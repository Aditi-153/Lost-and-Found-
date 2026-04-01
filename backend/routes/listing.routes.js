import express from "express";
import { reportLostItem , reportFoundItem } from "../controllers/listing.controller";
import { userAuth } from "../middlewares/user.auth";
import multer from "multer";

const router = express.Router();

const upload = multer({ dest: "uploads/" });

router.post("/lost" ,userAuth , upload.single("image"), reportLostItem);
router.post("/found" ,userAuth , upload.single("image"), reportFoundItem);




export default router;