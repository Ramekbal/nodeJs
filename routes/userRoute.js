const express = require("express");
const {
  registerUser,
  loginUser,
  userInfo,
} = require("../controllers/userController");
const router = express.Router();

router.route("/register").post(registerUser);
router.route("/login").post(loginUser);
router.route("/user-info").get(userInfo);

module.exports = router;
