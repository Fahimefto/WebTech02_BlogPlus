const Pool = require("pg").Pool;

const pool = new Pool({
  user: "postgres",
  password: "fahim",
  host: "localhost",
  port: "5432",
  database: "crud",
});

module.exports = pool;
