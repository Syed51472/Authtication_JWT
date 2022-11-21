const express = require("express");
const authRoute = require("./auth.js");
const taskRoute = require("./task.js");
const reviewRoute = require("./review.js");
const { checkLogin } = require("../middleware");

let router = express.Router();

router.use("/auth", authRoute);
router.use("/task", checkLogin, taskRoute);
router.use("/review", reviewRoute);

module.exports = router;
