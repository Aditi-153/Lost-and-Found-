import mongoose from "mongoose";

export const listingSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  location: {
    type: String,
    required: true,
    enum: ["canteen", "library", "classroom", "parking", "washroom", "campus"],
  },

  description: {
    type: String,
    required: true,
  },

  descriptionArr: {
    type: [String],
  },

  imageUrl: {
    type: String,
    required: true,
  },

  status: {
    type: String,
    enum: ["lost", "found"],
    required: true,
  },

  isMatched: {
    type: Boolean,
    default: false,
  },

  matchedWith: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Listing",
    default: null,
  },

  createdAt: {
    type: Date,
    default: Date.now,
  },

  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
});

export default mongoose.model("Listing", listingSchema);
