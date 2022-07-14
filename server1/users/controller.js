const pool = require("../db");
const queries = require("./queries");

const getUsers = (req, res) => {
  pool.query(queries.getUsers, (error, results) => {
    if (error) throw error;
    res.status(200).json(results.rows);
  });
};

const addUser = (req, res) => {
  const { user_name, user_email, user_password } = req.body;
  pool.query(queries.checkEmail, [user_email], (error, results) => {
    //if email exists or not
    if (results.rows.length) {
      res.send("email already exists");
    } else
      pool.query(
        queries.addUser,
        [user_name, user_email, user_password],
        (error, results) => {
          if (error) throw error;
          console.log(results.rows);
          res.status(201).send("Createed user successfully");
        }
      );
  });
};

const getUserById = (req, res) => {
  const id = parseInt(req.params.id);
  pool.query(queries.getUserById, [id], (error, results) => {
    if (error) throw error;
    res.status(200).json(results.rows);
  });
};
const getBlogByUserId = (req, res) => {
  const { user_id } = req.body;
  pool.query(queries.getBlogByUserId, [user_id], (err, results) => {
    if (err) {
      throw err;
    } else {
      res.json(results.rows).status(200);
    }
  });
};

const deleteUserbyId = (req, res) => {
  const id = parseInt(req.params.id);
  pool.query(queries.getUserById, [id], (error, results) => {
    const notFound = !results.rows.length;
    if (notFound) {
      res.send("no user found in database");
    } else {
      pool.query(queries.deleteUserbyId, [id], (error, results) => {
        if (error) throw error;

        res.status(200).send("successfully deleted user");
      });
    }
  });
};

const updateUserbyId = (req, res) => {
  const id = parseInt(req.params.id);
  const { user_name } = req.body;
  pool.query(queries.getUserById, [id], (error, results) => {
    const notFound = !results.rows.length;
    if (notFound) {
      res.send("no user found in database");
    } else {
      pool.query(queries.updateUserbyId, [user_name, id], (error, results) => {
        if (error) throw error;

        res.status(200).send("successfully updated user");
      });
    }
  });
};

module.exports = {
  getUsers,
  getUserById,
  addUser,
  deleteUserbyId,
  updateUserbyId,
  getBlogByUserId,
};
