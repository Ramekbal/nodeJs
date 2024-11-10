const asyncHandler = require("express-async-handler");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
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
  const { email, password } = req.body;
  if (!email || !password) {
    res.status(400).json("Please add all fields");
    throw new Error("Please add all fields");
  }
  const emailExits = await User.findOne({ email });
  if (!emailExits) {
    res.status(400).json("Please Register first");
    throw new Error("Please Register first");
  }
  const isPasswordMatch = await bcrypt.compare(password, emailExits.password);
  if (isPasswordMatch) {
    const token = jwt.sign(
      {
        user: {
          userName: emailExits.userName,
          email: emailExits.email,
          id: emailExits._id,
        },
      },
      process.env.JWT_SECRET,
      { expiresIn: "1h" }
    );
    console.log("calling");
    res.status(200).json({ token });
  } else {
    res.status(401).json("Invalid Password");
    throw new Error("Invalid Password");
  }

  //   res.status(200).json("Login...");
});

const userInfo = asyncHandler(async (req, res) => {
  res.status(200).json(req.user);
});

module.exports = { registerUser, loginUser, userInfo };
