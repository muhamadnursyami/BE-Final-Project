const express = require("express");
const route = express.Router();

route.get("/", (req, res) => {
  res.json("Selamat datang di Server BE Final Project");
});

module.exports = route;
