import mongoose from "mongoose";

export const adminSchema = new mongoose.Schema({
    username : {
        type : String ,
        required : true ,
        trim : true
    },
    email : {
        type : String,
        required : true,
        unique : true,
        trim : true
    },
    password : {
        type : String,
        required : true
    }
})

export default mongoose.model("Admin" , adminSchema);
