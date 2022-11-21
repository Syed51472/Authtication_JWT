const express = require("express");
const {
  loginHandler,
  signupHandler,
  forgotPasswordHandler,
} = require("../controller/authHandler");
const signUpRoute = require("./signUpRoute.js");

let route = express.Router();

route.post("/login", loginHandler);
route.use("/signup", signUpRoute);
route.post("/forgot", forgotPasswordHandler);

module.exports = route;
