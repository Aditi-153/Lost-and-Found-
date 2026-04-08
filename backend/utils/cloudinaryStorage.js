import multer from "multer";
import { CloudinaryStorage } from "multer-storage-cloudinary";
import cloudinary from "./cloudinary.js";

const storage = new CloudinaryStorage({
  cloudinary,
  params: async (req, file) => ({
    folder: "lost-found",
    resource_type: "image",
  }),
});


export const upload = multer({
  storage,
  fileFilter: (req, file, cb) => {
    cb(null, true); 
  },
});