const express = require("express");
const {
  getAllUser,
  getUserById,
  editProfileImage,
  updateProfile,
  deleteUserById,
  deleteAllUser,
} = require("../controllers/user.controllers");

const route = express.Router();
const upload = require("../utils/multer");

route.get("/", getAllUser);
route.get("/:id", getUserById);
route.put(
  "/edit-profile/:id/profile-image",
  upload.single("profileImage"),
  editProfileImage
);
route.put("/edit-profile/:id", updateProfile);
route.delete("/:id", deleteUserById);
route.delete("/", deleteAllUser);

module.exports = route;
