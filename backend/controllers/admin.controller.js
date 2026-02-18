import Admin from "../models/admin.model.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export const adminLogin = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({
        message: "Email and password are required",
      });
    }

    const admin = await Admin.findOne({ email });

    if (!admin)
      return res.status(400).json({
        message: "admin does not exist",
      });

    if(password !== admin.password){
        return res.status(400).json({
            message : "Incorrect password"
        })
    }

    const token = jwt.sign(
      {
        id: admin._id,
      },
      process.env.ADMIN_SECRET_KEY,
      {
        expiresIn: "1d",
      },
    );

    res.cookie("adminToken", token);

    res.status(200).json({
      message: "Login successfully",
      token,
      id: admin._id,
      email: admin.email,
    });
    
  } catch (error) {
    return res.status(500).json({
      message: "Login failed",
      error: error.message,
    });
  }
};
