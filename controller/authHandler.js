const db = require("../models");
const bcrypt = require("bcryptjs");
var salt = bcrypt.genSaltSync(10);
var jwt = require("jsonwebtoken");
let jwtSec = "sadbsjkabdsbsdbsdb";

const Customer = db.customers;
const Session = db.sessions;

async function loginHandler(req, res) {
  let { email, password } = req.body;

  let isAvailable = await Customer.findOne({
    where: {
      email: email,
    },
  });

  if (!isAvailable) {
    res.status(400).send({ message: "User not exists" });
  }

  let passMatch = bcrypt.compareSync(password, isAvailable.password);

  if (!passMatch) {
    res.status(400).send({ message: "Password is incorrect" });
  } else {
    let token = jwt.sign({ ...isAvailable }, jwtSec, { expiresIn: 60 * 60 });

    let info = {
      jwt: token,
      status: "Valid",
    };

    await Session.create(info);

    console.log("Hitted");
    return res
      .status(200)
      .send({ message: "User login successfully", token: token });
  }
}

async function signupHandler(req, res) {
  let { email, password, Cpassword, fname, lname } = req.body;
  if (password !== Cpassword) {
    res.status(400).send({ message: "Password not match" });
  }

  var passwordHash = bcrypt.hashSync(password, salt);

  let isAvailable = await Customer.findOne({
    where: { email: email },
  });

  if (isAvailable) {
    res.status(400).send({ message: "User already exists" });
  } else {
    let info = {
      email: email,
      password: passwordHash,
      fname: fname,
      lname: lname,
    };

    let newUser = await Customer.create(info);
    console.log(newUser);
    return res.status(200).send({ message: "User Created Successfully" });
  }

  // return res.status(200).send({ name: "Signup Handler hitted" });
}

function forgotPasswordHandler(req, res) {
  console.log("Hitted");
  return res.status(200).send({ name: "Forgot Password Handler hitted" });
}

module.exports = { loginHandler, signupHandler, forgotPasswordHandler };
