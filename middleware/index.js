function checkLogin(req, res, next) {
  let authHeader = req.header("Authorization");
  console.log(authHeader);
  next();
}

module.exports.checkLogin = checkLogin;
