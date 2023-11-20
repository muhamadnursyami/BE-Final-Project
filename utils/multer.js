const multer = require("multer");
// Konfigurasi Multer untuk menyimpan di dalam memori
const storage = multer.memoryStorage();
const upload = multer({
  storage: storage,
  limits: { fileSize: 100 * 1024 * 1024 }, // Batas ukuran file (100 MB)
});

module.exports = upload;
