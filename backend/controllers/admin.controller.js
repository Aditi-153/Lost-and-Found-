import Admin from "../models/admin.model.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import Listing from "../models/listing.model.js";
import User from "../models/user.model.js";


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

export const filterListings = async (req, res) => {
  try {
    const { stDate , endDate , status , location } = req.query;

    const filter = {};

    if(stDate && endDate){
      filter.createdAt = {
        $gte : new Date(stDate),
        $lte : new Date(endDate)
      }
    }

    if(status) {
      filter.status = status;
    }

    if(location){
      filter.location = location;
    }

    const userListing = await Listing.find(filter);

    res.status(200).json({
      message: "listings fetched successfully",
      status,
      userListing,
    });
    
  } catch (error) {
    res.status(500).json({
      message: "Failed to fetch listings",
      error: error.message,
    });
  }
};

export const adminLogout = ( req , res ) => {
  try {
    res.clearCookie("adminToken");
    return res.status(200).json({
      message : "Logout successfully"
    })
  } catch (error) {
    return res.status(500).json({
      message : "Logout failed",
      error : error.message
    })
  }
}     














