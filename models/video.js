const mongoose = require("mongoose");

const videoSchema = new mongoose.Schema({
  title: {
    type: String,
  },
  description: {
    type: String,
  },
  author: {
    type: String,
  },
  likes: {
    type: String,
  },
  rating: {
    type: String,
  },
  category: {
    type: String,
  },
  tanggal_upload: {
    type: String,
  },
  url_thumbnail: {
    type: String,
  },
  url_video: {
    type: String,
  },
  url_unduh: {
    type: String,
  },
});

module.exports = mongoose.model("Video", videoSchema);
