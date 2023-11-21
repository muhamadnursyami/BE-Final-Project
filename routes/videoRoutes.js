const express = require("express");
const {
  getVideoById,
  getAllVideo,
} = require("../controllers/video.controllers");

const route = express.Router();

route.get("/", getAllVideo);
route.get("/:id", getVideoById);

module.exports = route;
