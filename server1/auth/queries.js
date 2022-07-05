const checkEmail = "SELECT * FROM tbl_user WHERE user_email=$1";
const registerUser =
  "insert into tbl_user(user_name, user_email, user_password) values($1, $2, $3)";
const updateUserbyId = "UPDATE tbl_user SET user_name=$1 WHERE user_id=$2";
const loginUser = "Select * from tbl_user WHERE user_email=$1 and ";

module.exports = {
  checkEmail,
  registerUser,
  updateUserbyId,
  loginUser,
};
