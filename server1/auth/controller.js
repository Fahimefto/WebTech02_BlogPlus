const queries = require("./queries");
const pool = require("../db");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const cookieParser = require("cookie-parser");

const registerUser = async (req, res) => {
  const { user_name, user_email, user_password } = req.body;

  pool.query(queries.checkEmail, [user_email], async (error, results) => {
    //if email exists or not
    if (results.rows.length) {
      res.json({ message: "This email already exists" }).status(200);
    } else {
      const saltRound = 10;
      const salt = await bcrypt.genSalt(saltRound);
      const hashPassword = await bcrypt.hash(user_password, salt);
      pool.query(
        queries.registerUser,
        [user_name, user_email, hashPassword],
        async (error, results) => {
          if (error) throw error;

          res.json({ success: true, message: "Sign Up successful" });
        }
      );
    }
  });
};

//login user
const login = async (req, res) => {
  const { user_email, user_password } = req.body;
  pool.query(queries.checkEmail, [user_email], async (error, results) => {
    const notFound = !results.rows.length;
    if (notFound) {
      res.json({ auth: false, message: "invalid email adress" });
    } else {
      const isValid = await bcrypt.compare(
        user_password,
        results.rows[0].user_password
      );
      if (isValid) {
        const token = jwt.sign({ id: results.rows[0].user_id }, "fahim");
        // res.cookie("auth", token, {
        //   httpOnly: true,
        //   expires: new Date(Date.now() + 360000),
        // });
        res.json({
          auth: true,
          message: "Login successful",
          token: token,
          userId: results.rows[0].user_id,
          userName: results.rows[0].user_name,
        });
      } else {
        res.json({
          auth: false,
          message: "Authentication failed",
        });
      }
    }
  });
};

module.exports = {
  registerUser,
  login,
};
