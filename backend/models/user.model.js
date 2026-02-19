import mongoose from "mongoose";

export const userSchema = new mongoose.Schema({
    name : {
        type : String,
        required : true,
        trim : true
    },

    email : {
        type : String,
        required : true,
        unique : true,
        trim : true,
    },

    age : {
        type : Number ,
        required : true,
        min:[10],
        max:[100]
    },

    phone : {
        type : Number,
        required : true,
        unique : true
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