import User from "../models/user.model.js";
import bcrypt from "bcrypt";               
import jwt from "jsonwebtoken";     

export const registerUser = async ( req , res) => {
    try {
        const { name , email, age , phone , password } = req.body;

        if(!name || !email || !age || !phone || !password ){
            return res.status(400).json({
                message : "Fields are empty"
            })
        }

        const existingUser = await User.findOne({
            email,
        })

        if(existingUser){
            return res.status(400).json({
                message:"User already exist"
            })
        }

        const hashedPassword = await bcrypt.hash(password , 10)

        const user = await User.create({
            name,
            email,
            age: Number(age),      
            phone: Number(phone),
            password : hashedPassword,
        })

        const token = jwt.sign({
            id : user._id,
        } , process.env.JWT_SECRET_KEY , {
            expiresIn : "1d"
        })

        res.cookie("userToken" , token)

        return res.status(201).json({
            message : "User created successfully!",
            user :{
                id : user._id,
                name : user.name,
                email : user.email,
            }
        })
    } catch (error){
        return res.status(500).json({
            message : "Failed to register user!",
            error : error.message,
        })
    }
}

export const loginUser = async ( req , res ) => {
    try {

        const {email , password } = req.body;
        
        if(!email || !password){
            return res.status(400).json({
                message : "Fields are empty"
            })
        }

        const user = await User.findOne({email})

        if(!user){
            return res.status(404).json({
                message : "User does not exist"
            })
        }

        const isPasswordCorrect = await bcrypt.compare(password , user.password)

        if(!isPasswordCorrect){
            return res.status(400).json({
                message : "Incorrect password"
            })
        }

        const token = jwt.sign({
            id : user._id,
        } , process.env.JWT_SECRET_KEY , {
            expiresIn : "1d"
        })

        res.cookie("userToken" , token)

        res.status(200).json({
            message : "Login successfully",
            token,
            id : user._id,
            email : user.email,
        })
    } catch (error){
        return res.status(500).json({
            message : "Login failed",
            error : error.message 
        })
    }
}

export const userProfile = async ( req , res ) => {
    try {
        const { id } = req.params;

        const user = await User.findById(id);

        if(!user){
            return res.status(404).json({
                message : "User not found"
            })
        }

        return res.status(200).json({
            message : "User profile",
            user
        })
    } catch ( error){
        return res.status(500).json({
            message : "Failed to get user profile",
            error : error.message
        })
    }
}

export const userLogout = (req , res ) => {
    try {

        res.clearCookie("userToken");

        return res.status(200).json({
            message : "Logout successfully"
        })

    } catch (error){
        return res.status(500).json({
            message : "Logout failed",
            error : error.message
        })
    }
}