import mongoose from "mongoose";

export const listingSchema = new mongoose.Schema({
    location : {
        type : String ,
        required : true,
        enum : [ "canteen", "library" , "classroom" ,"parking" ,"washroom","campus" ]
    },
    description : {
        type : String ,
        required : true
    },

    descriptionArr : {  
        type : [String]
    },

    imageUrl : {
        type : String,
        required : true
    },

    status : {
        type : String ,
        enum :["lost" , "found" ]
    },

    createdAt : {
        type : Date,
        default : Date.now
    },

    owner : [{ 
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    }], 
} )

export default mongoose.model("Listing" , listingSchema);
