const express = require("express");
const { loginHandler, signupHandler } = require("../controller/authHandler.js");
const {
  postHandler,
  getHandler,
  putHandler,
  deleteHandler,
} = require("../controller/taskHandler.js");

let route = express.Router();

route.post("/postHandler", postHandler);
route.get("/getHandler", getHandler);
route.put("/putHandler", putHandler);
route.delete("/deleteHandler", deleteHandler);

module.exports = route;
