const multer = require("multer");
const crypto = require("crypto");

module.exports = {
  storage: multer.memoryStorage({
    fileName(req, file, callback) {
      const fileHash = crypto.randomBytes(10).toString("hex");
      const filename = `${fileHash}-${file.originalname}`;
      callback(null, filename);
    },
  }),
};
