const express = require("express");

const {
  loginHandler,
  signupHandler,
  forgotPasswordHandler,
} = require("../controller/authHandler");

let route = express.Router();

route.post("/user", signupHandler);

module.exports = route;
