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

    console.log(lostKeyword)

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
