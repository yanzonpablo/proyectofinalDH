const path = require("path");
const multer = require("multer");

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, path.join(__dirname, "../public/images/category"));
  },
  filename: (req, file, cb) => {
    const newImage = "categoria-" + Date.now() + path.extname(file.originalname);
    cb(null, newImage);
  },
});
const uploadCategoria = multer({ storage: storage });

module.exports = uploadCategoria;