import User from "../models/user.model.js"
import dotenv from "dotenv"
import jwt from "jsonwebtoken"


export const userAuth = async ( req , res, next ) => {
    try {
        const token = req.cookies.userToken;  

        if(!token){   
            return res.status(400).json({
                message : "please log in first"
            })
        }

        const decoded = jwt.verify(token , process.env.JWT_SECRET_KEY);   

        if(!decoded){
            return res.status(400).json({
                message : "Invalid token"
            })
        }

        const user = await User.findById(decoded.id)  

        if(!user){
            return res.status(400).json({
                message : "User not found"
            })
        }

        req.user = {      
            id : user._id,
            email : user.email  
        }

        return next();       

    } catch(err){
        return res.status(500).json({
            message : "Not authorized"
        })
    }
}