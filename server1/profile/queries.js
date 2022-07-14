const getBlogByUserId = "SELECT * FROM tbl_blog WHERE user_id=$1";
module.exports = {
  getBlogByUserId,
};
