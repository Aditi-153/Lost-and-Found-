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

export const getAlllistings = async ( req , res ) => {
  try {

    const { date , status , today } = req.query

    const userListing = await Listing.find();

    if(filter.status === "lost"){
      return res.status(200).json({
        message : "fetch all lost items sucessfully",
        
      })
    }

    if(Listing.status === "found"){
      return res.status(200).json({
        message : "fetch all found items sucessfully"
      })
    }

    if(date) {
      const startDate = new Date(date);
      const endDate = new Date(date);
      const today = 

      startDate.setHours(0, 0, 0, 0);
      endDate.setHours(23, 59, 59, 999);
    }
    res.status(200).json({
      message : "listing fetch sucessfully",
      userListing
    })                          
  } catch(error){
    console.log(error)
    return res.status(500).json({
      message : "failed to fetch listing",
      error : error.message
    })
  }
}













