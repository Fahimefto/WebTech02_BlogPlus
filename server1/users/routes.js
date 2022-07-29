const { Router } = require("express");
const controller = require("../users/controller");
const router = Router();
const verify = require("../jwtgen/verifyToken");

router.get("/", controller.getUsers);
// router.post("/", controller.addUser);
// router.get ("/:id/post",controller.getBlogby)
// router.get("/:id", controller.getUserById);
router.delete("/:id", controller.deleteUserbyId);
router.put("/:id", controller.updateUserbyId);
router.get("/", controller.getBlogByUserId);

module.exports = router;
