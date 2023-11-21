const Video = require("../models/video");
module.exports = {
  getAllVideo: async (req, res) => {
    try {
      const video = await Video.find();
      res.json({
        data: video,
      });
    } catch (error) {
      console.log(error);
      res.status(400).send(error);
    }
  },
  getVideoById: async (req, res) => {
    try {
      const { id } = req.params;

      const videoById = await Video.findById(id);

      res.json({
        data: videoById,
      });
    } catch (error) {
      console.log(error);
      res.status(400).send(error);
    }
  },
};
