const getAllBlog = "SELECT * FROM  tbl_blog";
const addBlog =
  "INSERT INTO tbl_blog(user_id,blog_tittle,blog_post) values($1,$2,$3)";
const getBlogByBlogId = "SELECT * FROM tbl_blog WHERE blog_id=$1";
const updateBlogByAllId =
  "UPDATE tbl_blog SET blog_tittle=$1 , blog_post=$2 WHERE user_id=$3 and blog_id=$4";
const deleteBlogByAllId = "DELETE tbl_blog WHERE user_id=$1 and blog_id=$2";
const getBlogByAllId = "SELECT * FROM tbl_blog WHERE user_id=$1 and blog_id=$2";
module.exports = {
  getAllBlog,
  addBlog,
  getBlogByBlogId,
  updateBlogByAllId,
  deleteBlogByAllId,
  getBlogByAllId,
};
