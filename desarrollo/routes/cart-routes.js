const { Router } = require("express");
const express = require("express");
const router = express.Router();
const cartcontroller = require("../controllers/cart-controller");


router.get("/cart/:id", cartcontroller.index);
router.post("/cart/:id", cartcontroller.addCart);

