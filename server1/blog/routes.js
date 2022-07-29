const { Router } = require("express");
const router = Router();
const controller = require("./controller");
const verify = require("../jwtgen/verifyToken");

router.get("/", verify, controller.getAllBlog);
router.get("/:id", verify, controller.getBlogByBlogId);
// router.get("/:uid/:id", verify, controller.getBlogByAllId);
router.post("/", verify, controller.addBlog);
router.put("/:uid/:id", verify, controller.updateBlogByAllId);
router.delete("/:uid/:id", verify, controller.deleteBlogByAllId);

module.exports = router;
