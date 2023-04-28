const asyncHandler = require("express-async-handler");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const User = require("../models/userModel");

// @desc Create a new user
// @route POST /api/users/login
// @access Public
const registerUser = asyncHandler(async (req, res) => {
  const { name, email, password } = req.body;

  // check that all fields are completed
  if (!name || !email || !password) {
    res.status(400);
    throw new Error("Please input all fields");
  }
  //check if user exists
  const userExist = await User.findOne({ email });
  if (userExist) {
    res.status(400);
    throw new Error("User already exists");
  }
  // salt & hash the password
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);
  // create the user
  const user = await User.create({
    name,
    email,
    password: hashedPassword,
  });

  // check if user details passed requirements
  if (user) {
    res.status(201).json({
      _id: user.id,
      name: user.name,
      email: user.email,
    });
  } else {
    res.status(400);
    throw new Error("Invalid User Data");
  }
});

// @desc authenticate a  User
// @route Post /api/users/login
// @access Private
const loginUser = asyncHandler(async (req, res) => {
  res.status(201).json({ message: "logged in user" });
});

// // @desc Get User Data
// // @route Put /api/users/me
// // @access Public
const getUserData = asyncHandler(async (req, res) => {
  res.status(200).json({ message: "Get user data" });
});

module.exports = { registerUser, loginUser, getUserData };
