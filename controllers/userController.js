const User = require("../models/userModel");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const asyncHandler = require("express-async-handler");

// @desc Register a  User
// @route Post /api/user
// @access Private
const registerUsers = asyncHandler(async (req, res) => {
  const { name, email, password } = req.body;
  if (!name || !email || !password) {
    res.status(400);
    throw new Error("Please add all fields");
  }
  // check if user exists
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
  // confirm that the user was created
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

module.exports = { registerUsers, loginUser, getUserData };
