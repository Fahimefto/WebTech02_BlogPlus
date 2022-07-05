const queries = require("./queries");
const pool = require("../db");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const registerUser = async (req, res) => {
  const { user_name, user_email, user_password } = req.body;

  pool.query(queries.checkEmail, [user_email], async (error, results) => {
    //if email exists or not
    if (results.rows.length) {
      res.send("email already exists");
    } else {
      const saltRound = 10;
      const salt = await bcrypt.genSalt(saltRound);
      const hashPassword = await bcrypt.hash(user_password, salt);
      pool.query(
        queries.registerUser,
        [user_name, user_email, hashPassword],
        async (error, results) => {
          if (error) throw error;
          console.log(results.rows);
          res.status(200).send("register user successfully");
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
      req.status(401).send("invalid email adress");
    } else {
      const isValid = await bcrypt.compare(
        user_password,
        results.rows[0].user_password
      );
      if (isValid) {
        const token = jwt.sign({ id: results.rows[0].user_id }, "fahim");
        res.status(200).send(token);
      } else {
        res.status(401).send("Authentication Failed");
      }
    }
  });
};

module.exports = {
  registerUser,
  login,
};
