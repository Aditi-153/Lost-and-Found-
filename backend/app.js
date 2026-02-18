import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cookieParser from "cookie-parser";
import userRoute from "./routes/user.routes.js";
import adminRoute from "./routes/admin.routes.js";


mongoose.connect(process.env.MONGO_URL || "mongodb://127.0.0.1:27017/lost-and-found")
.then(() => console.log("Connected to MongoDB"))
.catch((err) => console.log(err));
dotenv.config();

const app = express();

app.use(express.json());
app.use(cookieParser());

app.get("/", (req, res) => {
    res.send("API is running...");
})

app.use("/user", userRoute);
app.use("/admin", adminRoute);

const PORT =process.env.PORT || 3000;

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
