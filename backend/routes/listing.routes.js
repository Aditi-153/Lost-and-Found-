import express from "express";
import { reportLostItem } from "../controllers/listing.controller";
import { userAuth } from "../middlewares/user.auth";

const router = express.Router();

router.post("/lost" ,userAuth , reportLostItem);

export default router ;