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

    image : {
        type : String,
        required : true
    },

    status : {
        type : String ,
        enum :[ "lost" , "found" ]
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
