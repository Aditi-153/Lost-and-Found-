import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cookieParser from "cookie-parser";
import userRoute from "./routes/user.routes.js";
import adminRoute from "./routes/admin.routes.js";
import reportRoute from "./routes/listing.routes.js"
const cors = require('cors')

dotenv.config();
mongoose.connect(process.env.MONGO_URL || "mongodb://127.0.0.1:27017/lost-and-found")
.then(() => console.log("Connected to MongoDB"))
.catch((err) => console.log(err));


const app = express();
const corsOptions = {
  origin: 'http://localhost:5173',
  credentials : true 
}

app.use(cors(corsOptions))
app.use(express.json());
app.use(cookieParser());

app.get("/", (req, res) => {
    res.send("API is running...");
})

app.use("/user", userRoute);
app.use("/admin", adminRoute);
app.use("/report" , reportRoute)

const PORT =process.env.PORT || 3000;

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
