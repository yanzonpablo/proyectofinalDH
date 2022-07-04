const path = require("path");
const multer = require("multer");

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, path.join(__dirname, "../public/images/products"));
  },
  filename: (req, file, cb) => {
    const newImage = "product-" + Date.now() + path.extname(file.originalname);
    cb(null, newImage);
  },
});
const upload = multer({ storage: storage });

module.exports = upload;