import { isAwaitExpression } from "typescript";
import Listing from "../models/listing.model.js";
import keyword_extractor from "keyword-extractor";

export const reportLostItem = async (req, res) => {
  try {
    const { location, description, imageUrl } = req.body;

    if (!location || !description || !imageUrl) {
      return res.status(400).json({
        message: "All fields are required",
      });
    }

    const lostKeyword = keyword_extractor.extract(description, {
      language: "english",
      remove_digits: true,
      return_changed_case: true,
      remove_duplicates: false,
    });

    const lostItem = await Listing.create({
      location,
      description,
      imageUrl,
      descriptionArr : lostKeyword,
    });

    return res.status(201).json({
      message: "Lost report created successfully",
      location,
      imageUrl,
      lostItem
    });

  } catch (error) {
    
    return res.status(500).json({
      message: "Failed to report lost item",
      error: error.message,
    });
  }
};

export const reportFoundItem = async (req, res) => {
  try {
    const { location, description, imageUrl } = req.body;

    if (!location || !description || !imageUrl) {
      return res.status(400).json({
        message: "All fields are required",
      });
    }

    const foundKeyword = keyword_extractor.extract(description, {
      language: "english",
      remove_digits: true,
      return_changed_case: true,
      remove_duplicates: false,
    });

    const foundItem = await Listing.create({
      location,
      description,
      imageUrl,
      descriptionArr : foundKeyword,
    });

    return res.status(201).json({
      message: "Found report created successfully",
      location,
      imageUrl,
      foundItem
    });

  } catch (error) {
    
    return res.status(500).json({
      message: "Failed to report lost item",
      error: error.message,
    });
  }
};

// export const matchItem = async ( req , res ) => {
//   try {
//     const {location , description } = req.body;

//     const foundItem = await  Listing.find({
//       location,
//       status : "found"
//     });

//     const matches = foundItem.map((item) => {
//       item.descriptionArr.map((keyword) ={
//         if (){

//         } 
        
//       })
    
//     });
//   } catch(error){
//     console.log(error);
//     return res.status(500).json({
//       message : "failed to match item",
//       error : error.message,
//     })
//   }
// }

