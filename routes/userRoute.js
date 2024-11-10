const express = require("express");
const {
  registerUser,
  loginUser,
  userInfo,
} = require("../controllers/userController");
const validateToken = require("../middleware/validateTokenHandler");
const router = express.Router();

router.route("/register").post(registerUser);
router.route("/login").post(loginUser);
router.get("/user-info", validateToken, userInfo);

module.exports = router;
