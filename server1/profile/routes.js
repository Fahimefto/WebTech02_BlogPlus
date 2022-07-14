const { Router } = require("express");
const router = Router();
const controller = require("./controller");
router.get("/:id", controller.getBlogByUserId);

module.exports = router;
