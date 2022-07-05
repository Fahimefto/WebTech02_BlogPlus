const pool = require("../db");
const queries = require("./queries");
const userQuery = require("../users/queries");
//get all blog
const getAllBlog = (req, res) => {
  pool.query(queries.getAllBlog, (error, results) => {
    if (error) throw error;
    else {
      res.status(200).json(results.rows);
    }
  });
};

//addblog
const addBlog = (req, res) => {
  const uid = parseInt(req.params.uid);
  pool.query(userQuery.getUserById, [uid], (error, results) => {
    const notFound = !results.rows.length;
    if (notFound) {
      res.status(401).send("userid not found");
    } else {
      const { blog_tittle, blog_post } = req.body;
      pool.query(
        queries.addBlog,
        [uid, blog_tittle, blog_post],
        (error, results) => {
          res.status(200).send("succesfully created blog");
        }
      );
    }
  });
};

//get blog by user id
const getBlogByUserId = (req, res) => {
  const uid = parseInt(req.params.uid);
  pool.query(userQuery.getUserById, [uid], (error, results) => {
    const notFound = !results.rows.length;
    if (notFound) {
      res.status(401).send("userid not found in database");
    } else {
      pool.query(queries.getBlogByUserId, [uid], (error, results) => {
        const notFoundBlog = !results.rows.length;
        if (notFoundBlog) {
          res.send("no blog found for this user " + uid);
        } else {
          res.status(200).json(results.rows);
        }
      });
    }
  });
};

//update post through the id
const updateBlogByAllId = (req, res) => {
  const uid = parseInt(req.params.uid);
  const id = parseInt(req.params.id);
  pool.query(userQuery.getUserById, [uid], (error, results) => {
    const notFound = !results.rows.length;
    if (notFound) {
      res.status(401).send("userid not found");
    } else {
      const { blog_tittle, blog_post } = req.body;
      pool.query(
        queries.updateBlogByAllId,
        [blog_tittle, blog_post, uid, id],
        (error, results) => {
          res.status(200).send("succesfully updated blog" + id);
        }
      );
    }
  });
};

//delete blog through the user id

const deleteBlogByAllId = (req, res) => {
  const uid = parseInt(req.params.uid);
  const id = parseInt(req.params.id);
  pool.query(userQuery.getUserById, [uid], (error, results) => {
    const notFound = !results.rows.length;
    if (notFound) {
      res.status(401).send("userid not found");
    } else {
      pool.query(queries.deleteBlogByAllId, [uid, id], (error, results) => {
        res.status(200).send("succesfully deleted blog" + id);
      });
    }
  });
};

const getBlogByAllId = (req, res) => {
  const uid = parseInt(req.params.uid);
  const id = parseInt(req.params.id);
  pool.query(userQuery.getUserById, [uid], (error, results) => {
    const notFound = !results.rows.length;
    if (notFound) {
      res.status(401).send("userid not found");
    } else {
      pool.query(queries.getBlogByAllId, [uid, id], (error, results) => {
        if (error) throw error;
        else if (!results.rows.length) {
          res.send("no post found of this user " + uid);
        } else {
          res.status(200).json(results.rows);
        }
      });
    }
  });
};

module.exports = {
  getAllBlog,
  addBlog,
  getBlogByUserId,
  updateBlogByAllId,
  deleteBlogByAllId,
  getBlogByAllId,
};
