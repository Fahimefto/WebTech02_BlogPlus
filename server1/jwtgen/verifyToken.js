const jwt = require("jsonwebtoken");

module.exports = function (req, res, next) {
  const token = req.header("auth");
  if (!token)
    return res.json({
      auth: false,
      message: "Access Denied You Need to Sign in",
    });
  try {
    const verified = jwt.verify(token, "fahim");
    req.user = verified;

    next();
  } catch (error) {
    res.json({ auth: false, message: "Invalid Token" });
  }
};
