import User from "../models/user.model.js";
import bcrypt from "bcrypt";               
import jwt from "jsonwebtoken";     


export const registerUser = async ( req , res) => {
    try {
        const { email, age , phone , password } = req.body;

        if(!email || !age || !phone || !password ){
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
            email,
            age,
            phone,
            password : hashedPassword,
        })

        const token = jwt.sign({  //create token
            id : user._id,
        } , process.env.JWT_SECRET_KEY , {
            expiresIn : "1d"
        })

        res.cookie("userToken" , token)

        return res.status(201).json({           //201 : created 
            message : "User created successfully!",
            user :{
                id : user._id,
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

        const { email , password } = req.body;
        
        if(!email || !password){
            return res.status(400).json({
                message : "Email and password are required"
            })
        }

        const user = await User.findOne({email})

        if(!user){
            return res.status(404).json({
                message : "user does not exist"
            })
        }

        const isPasswordCorrect = await bcrypt.compare(password , user.password) //compare password

        if(!isPasswordCorrect){
            return res.status(400).json({
                message : "Incorrect password"
            })
        }

        const token = jwt.sign({  //create token
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
























