import Listing from "../models/listing.model.js";
import keyword_extractor from "keyword-extractor";

export const reportLostItem = async (req, res) => {
  try {
    const { location, description, imageUrl , status } = req.body;

    if (!location || !description || !imageUrl || !status) {
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
      status
    });

    return res.status(201).json({
      message: "Lost report created successfully",
      location,
      imageUrl,
      lostItem,
      status
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
    const { location, description, imageUrl , status} = req.body;

    if (!location || !description || !imageUrl || !status) {
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
      status
    });

    return res.status(201).json({
      message: "Found report created successfully",
      location,
      imageUrl,
      foundItem,
      status 
    });

  } catch (error) {
    
    return res.status(500).json({
      message: "Failed to report lost item",
      error: error.message,
    });
  }
};


export const matchItem = async (req, res) => {
  try {
    const { location, description } = req.body;

    if (!location || !description) {
      return res.status(400).json({
        message: "Location and description are required",
      });
    }

   
    const searchKeywords = keyword_extractor.extract(description, {
      language: "english",
      remove_digits: true,
      return_changed_case: true,
      remove_duplicates: true,
    });

   
    const matchedItems = await Listing.find({
      location: location,
      status: "found",
      descriptionArr: { $in: searchKeywords }, 
    });

    return res.status(200).json({
      message: "Matching items fetched successfully",
      totalMatches: matchedItems.length,
      matches: matchedItems,
    });

  } catch (error) {
    console.log(error);
    return res.status(500).json({
      message: "Failed to match items",
      error: error.message,
    });
  }
};