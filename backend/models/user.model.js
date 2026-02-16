import mongoose from "mongoose";

export const userSchema = new mongoose.Schema({
    username : {
        type : String,
        required : true,
        trim : true
    },

    age : {
        type : Number ,
        required : true
    },

    email : {
        type : String,
        required : true,
        unique : true,
        trim : true,
    },

    phone : {
        type : Number,
        required : true
    },

    password : {
        type : String,
        required : true
    },

    createdAt : {
        type : Date,
        default : Date.now
    }
})

export default mongoose.model("User", userSchema);