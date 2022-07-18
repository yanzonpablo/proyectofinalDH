const path = require("path");
const multer = require("multer");

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, path.join(__dirname, "../public/images/users"));
  },
  filename: (req, file, cb) => {
    const newImage = "user-" + Date.now() + path.extname(file.originalname);
    cb(null, newImage);
  },
});
const uploadUser = multer({ storage: storage });

module.exports = uploadUser;