require("dotenv").config();
const User = require("../models/user");

const cloudinary = require("../utils/cloudinary");

module.exports = {
  editProfile: async (req, res) => {
    try {
      const { id } = req.params;

      // Mengunggah file baru ke Cloudinary
      const result = await cloudinary.uploader
        .upload_stream({ resource_type: "auto" }, async (error, result) => {
          if (error) {
            console.error(error);
            res.status(500).json({ error: "Internal Server Error" });
          } else {
            // Mengupdate foto profil di MongoDB
            const updatedUser = await User.findByIdAndUpdate(
              id,
              { profileImage: result.secure_url },
              { new: true }
            );
            res.json(updatedUser);
          }
        })
        .end(req.file.buffer);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  },
};
