const asyncHandler = require("express-async-handler");
const bcrypt = require("bcrypt");
const User = require("../models/userModal");

//@Desc Register a new user
//@Route GET /user/register
//@Access Public

const registerUser = asyncHandler(async (req, res) => {
  const { userName, email, password } = req.body;
  console.log(userName, email, password);
  if (!userName || !email || !password) {
    res.status(400).json("Please add all fields");
  }
  const emailExits = await User.findOne({ email });
  console.log("====", emailExits);
  if (emailExits) {
    res.status(400).json("Email already exists");
  }

  //Bcrypt the password
  const hashPassword = await bcrypt.hash(password, 10);
  const registerUsers = await User.create({
    userName: userName,
    email: email,
    password: hashPassword,
  });
  if (registerUsers) {
    res.status(201).json("User Registered Successfully");
  } else {
    res.status(400);
    throw new Error("User Not Registered");
  }
});

const loginUser = asyncHandler(async (req, res) => {
  res.status(200).json("Login...");
});

const userInfo = asyncHandler(async (req, res) => {
  res.status(200).json("User Info...");
});

module.exports = { registerUser, loginUser, userInfo };
