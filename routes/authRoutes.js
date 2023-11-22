const express = require("express");
const {
  register,
  login,
  editProfile,
} = require("../controllers/auth.controllers");
const route = express.Router();
const upload = require("../utils/multer");
route.post("/register", register);
route.post("/login", login);
route.put(
  "/edit-profile/:id/profile-image",
  upload.single("profileImage"),
  editProfile
);

module.exports = route;
