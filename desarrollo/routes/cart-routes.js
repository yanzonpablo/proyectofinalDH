const { Router } = require("express");
const express = require("express");
const router = express.Router();
const cartcontroller = require("../controllers/cart-controller");
const cartMiddleware = require("../middlewares/cartMiddleware");


router.get("/cart", cartMiddleware, cartcontroller.index);
