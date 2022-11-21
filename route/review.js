const express = require("express");
const {
  reviewController,
  updateHandler,
} = require("../controller/reviewController");

let route = express.Router();

route.post("/userReview", reviewController);
route.get("/:id", updateHandler);

module.exports = route;
