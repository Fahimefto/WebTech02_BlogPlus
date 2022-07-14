const pool = require("../db");
const queries = require("./queries");
const controller = require("./controller");
const verify = require("../jwtgen/verifyToken");

const getBlogByUserId = (req, res) => {
  const id = parseInt(req.params.id);
  pool.query(queries.getBlogByUserId, [id], (err, results) => {
    if (err) {
      throw err;
    } else {
      res.json(results.rows).status(200);
    }
  });
};

module.exports = { getBlogByUserId };
