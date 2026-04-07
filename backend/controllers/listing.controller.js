import Listing from "../models/listing.model.js";
import keyword_extractor from "keyword-extractor";

export const reportLostItem = async (req, res) => {
  try {
    const { location, description, title } = req.body;
    const imageUrl = req.file?.path;

    // ✅ FIX 1: Check user FIRST
    if (!req.user) {
      return res.status(401).json({
        message: "Unauthorized",
      });
    }

    if (!title || !location || !description || !req.file) {
      return res.status(400).json({
        message: "All fields are required",
      });
    }

    const lostKeyword = keyword_extractor.extract(description, {
      language: "english",
      remove_digits: true,
      return_changed_case: true,
      remove_duplicates: true,
    });

    const lostItem = await Listing.create({
      title,
      location,
      description,
      imageUrl,
      descriptionArr: lostKeyword,
      status: "lost",
      owner: req.user._id,
    });

    return res.status(201).json({
      message: "Lost report created successfully",
      lostItem,
    });
  } catch (error) {
    console.error("ERROR:", error); // ✅ FIX 2: Proper logging

    return res.status(500).json({
      message: "Failed to report lost item",
      error: error.message,
    });
  }
};

export const reportFoundItem = async (req, res) => {
  try {
    const { location, description, title } = req.body;
    const imageUrl = req.file?.path || req.file?.secure_url;

    // ✅ FIX 1: Same here
    if (!req.user) {
      return res.status(401).json({
        message: "Unauthorized",
      });
    }

    if (!title || !location || !description || !req.file) {
      return res.status(400).json({
        message: "All fields are required",
      });
    }

    const foundKeyword = keyword_extractor.extract(description, {
      language: "english",
      remove_digits: true,
      return_changed_case: true,
      remove_duplicates: true,
    });

    const foundItem = await Listing.create({
      title,
      location,
      description,
      imageUrl,
      descriptionArr: foundKeyword,
      status: "found",
      owner: req.user._id,
    });

    return res.status(201).json({
      message: "Found report created successfully",
      foundItem,
    });
  } catch (error) {
    console.error("ERROR:", error); // ✅ FIX 2

    return res.status(500).json({
      message: "Failed to report found item",
      error: error.message,
    });
  }
};

export const getItems = async (req, res) => {
  try {
    const items = await Listing.find({
      owner: req.user._id,
    });

    const lost = items.filter((item) => item.status === "lost");
    const found = items.filter((item) => item.status === "found");

    res.json({ lost, found });
  } catch (error) {
    console.error("ERROR:", error); // ✅ added

    res.status(500).json({ message: error.message });
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
    console.error("ERROR:", error); // ✅ better log

    return res.status(500).json({
      message: "Failed to match items",
      error: error.message,
    });
  }
};
