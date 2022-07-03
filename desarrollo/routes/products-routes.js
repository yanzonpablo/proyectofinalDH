const path = require("path");
const express = require("express");
const router = express.Router();
const multer = require("multer");
const productsController = require("../controllers/products-controller");
const validateProductId = require("../middlewares/validate-product-id");

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

//LIST
router.get("/", productsController.index); //Listado de productos
//CREATE
router.get("/create/", productsController.create); //Vista formulario de creacion
router.post("/", upload.single("imagen_producto"), productsController.store); //POST de creacion de producto
//EDIT
router.get("/edit/:id", productsController.edit); //Vista de edicion de producto
router.put("/:id", upload.single("imagen_producto"), productsController.update); //PUT de edicion de producto
//DELETE
router.delete("/:id", productsController.destroy); //DELETE de producto
//DETAILS
router.get("/:id/", validateProductId, productsController.details); //Vista detalle de producto

module.exports = router;
