const express = require("express");
const route = express.Router();
const uploadRoutes = require("./uploadRoutes");
route.get("/", (req, res) => {
  res.json("Selamat datang di Server BE Final Project");
});

route.use("/uploads", uploadRoutes);
module.exports = route;
