const getUsers = "SELECT * FROM tbl_user";
const getUserById = "SELECT * FROM tbl_user WHERE user_id=$1";
const checkEmail = "SELECT * FROM tbl_user WHERE user_email=$1";
const addUser =
  "insert into tbl_user(user_name, user_email, user_password) values($1, $2, $3)";
const deleteUserbyId = "DELETE FROM tbl_user WHERE user_id=$1";
const updateUserbyId = "UPDATE tbl_user SET user_name=$1 WHERE user_id=$2";
const getBlogByUserId = "SELECT * FROM tbl_blog WHERE user_id=$1";

module.exports = {
  getUsers,
  getUserById,
  addUser,
  checkEmail,
  deleteUserbyId,
  updateUserbyId,
  getBlogByUserId,
};
