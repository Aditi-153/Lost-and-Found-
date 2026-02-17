import User from "../models/user.model.js"

import jwt from "jsonwebtoken"


export const userAuth = async ( req , res, next ) => {
    try {
        const token = req.cookies.userToken;  //get token

        if(!token){    // validate token 
            res.status(400).json({
                message : "please log in first"
            })
        }

        const decoded = jwt.verify(token , process.env.JWT_SECRET_KEY);  //check token valid or not 

        if(!decoded){
            return res.status(400).json({
                message : "Invalid token"
            })
        }

        const user = await User.findById(decoded.id).select("-password")  //fetch user from db , remove password

        if(!user){
            return res.status(400).json({
                message : "User not found"
            })
        }

        req.user = {       //attach user to request
            id : user._id,
            username : user.username,
            email : user.email  
        }

        next();         // allow to proceed to actual api

    } catch(err){
        return res.status(500).json({
            message : "Not authorized"
        })
    }
}