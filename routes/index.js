const express = require("express");
const route = express.Router();
const uploadRoutes = require("./uploadRoutes");
const videoRoutes = require("./videoRoutes");
const authRoutes = require("./authRoutes");
const userRoutes = require("./userRoutes");
route.get("/", (req, res) => {
  res.json("Selamat datang di Server BE Final Project");
});

route.use("/uploads", uploadRoutes);
route.use("/videos", videoRoutes);
route.use("/auth", authRoutes);
route.use("/users", userRoutes);
module.exports = route;
