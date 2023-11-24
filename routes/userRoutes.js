const express = require("express");
const { editProfile } = require("../controllers/user.controllers");

const route = express.Router();
const upload = require("../utils/multer");
route.put(
  "/edit-profile/:id/profile-image",
  upload.single("profileImage"),
  editProfile
);

module.exports = route;
