const express = require("express");
const router = express.Router();

const apiUserRouter = require("../API/users")


router.use("/user", apiUserRouter);



module.exports = router;