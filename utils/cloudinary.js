require("dotenv").config();
const cloudinary = require("cloudinary").v2;

// cloudinary
cloudinary.config({
  cloud_name: process.env.CLOUDDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDDINARY_API_KEY,
  api_secret: process.env.CLOUDDINARY_API_SECRET,
});
