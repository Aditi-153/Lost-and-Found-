import User from "../models/user.model.js";
import jwt from "jsonwebtoken";

export const userAuth = async (req, res, next) => {
  try {
    const token = req.cookies.userToken;

    if (!token) {
      return res.status(401).json({
        message: "Please log in first",
      });
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);

    if (!decoded) {
      return res.status(401).json({
        message: "Invalid token",
      });
    }

    const user = await User.findById(decoded.id);

    if (!user) {
      return res.status(401).json({
        message: "User not found",
      });
    }

    
    req.user = user;

    next();

  } catch (err) {
    console.log("AUTH ERROR:", err);
    return res.status(500).json({
      message: "Not authorized",
    });
  }
};