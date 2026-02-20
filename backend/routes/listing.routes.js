import express from "express";
import { reportLostItem , reportFoundItem } from "../controllers/listing.controller";
import { userAuth } from "../middlewares/user.auth";

const router = express.Router();

router.post("/lost" ,userAuth , reportLostItem);
router.post("/found" ,userAuth , reportFoundItem);

export default router;