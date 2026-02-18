import Admin from "../models/admin.model.js"
import dotenv from "dotenv"
import jwt from "jsonwebtoken"

export const adminAuth = async ( req , res , next) => {
    try {
        const token = req.cookies.adminToken;

        if(!token){
            return res.status(400).json({
                message : "please login first"
            })
        }

        const decoded = jwt.verify(token , process.env.ADMIN_SECRET_KEY);

        if(!decoded){
            return res.status(400).json({
                message : "invalid token"
            })
        }

        const admin = await Admin.findById(decoded.id);

        if(!admin){
            return res.status(400).json({
                message : "admin not found"
            })
        }

        req.admin = {
            id : admin._id,
            email : admin.email
        }

        return next();

    } catch(error){
        return res.status(500).json({
            message : "Not authorized",
        })
    }
}