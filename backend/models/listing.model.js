import mongoose from "mongoose";

export const listingSchema = new mongoose.Schema({
    title : {
        type : String ,
        required : true
    },
    location : {
        type : String ,
        required : true
    },
    description : {
        type : String ,
        required : true
    },

    descriptionArr : {  //to flter keywords from description
        type : Array
    },

    imageUrl : {
        type : String,
        required : true
    },

    status : {
        type : String ,
        enum :[ "returned" , "not found" , "found" ]
    },

    createdAt : {
        type : Date,
        default : Date.now
    },

    owner : [{ 
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    }], 
})

export default mongoose.model("Listing" , listingSchema);
