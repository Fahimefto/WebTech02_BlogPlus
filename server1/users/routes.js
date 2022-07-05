const { Router } = require("express");
const controller = require("../users/controller");
const router = Router();

router.get("/", controller.getUsers);
router.post("/", controller.addUser);
router.get("/:id", controller.getUserById);
router.delete("/:id", controller.deleteUserbyId);
router.put("/:id", controller.updateUserbyId);

module.exports = router;
