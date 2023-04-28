<<<<<<< HEAD
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
=======
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
>>>>>>> 421c4c3a888772ec8d0216c5a71cb46d0f88add7
  const userExist = await User.findOne({ email });
  if (userExist) {
    res.status(400);
    throw new Error("User already exists");
  }
<<<<<<< HEAD
  // salt & hash the password
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);
=======
  // Hash passwords
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);

>>>>>>> 421c4c3a888772ec8d0216c5a71cb46d0f88add7
  // create the user
  const user = await User.create({
    name,
    email,
    password: hashedPassword,
  });
<<<<<<< HEAD
  // confirm that the user was created
=======

  // check if user details passed requirements
>>>>>>> 421c4c3a888772ec8d0216c5a71cb46d0f88add7
  if (user) {
    res.status(201).json({
      _id: user.id,
      name: user.name,
      email: user.email,
<<<<<<< HEAD
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
=======
      token: generateJWT(user._id),
    });
  } else {
    throw new Error("invalid user data");
  }
});

// @desc Authenticate  user
// @route POST /api/users
// @access Public
const loginUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;
  //check for user email
  const user = await User.findOne({ email });
  if (user && (await bcrypt.compare(password, user.password))) {
    res.status(200).json({
      _id: user.id,
      name: user.name,
      email: user.email,
      token: generateJWT(user._id),
    });
  } else {
    res.status(400);
    throw new Error("invalid credentials");
  }
});

// @desc Get user data
// @route GET /api/users/me
// @access Public
const getUser = asyncHandler(async (req, res) => {
  const { name, email, _id } = await User.findById(req.user.id);

  res.status(200).json({
    id: _id,
    name,
    email,
  });
});

// generate jwt web token
const generateJWT = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: "30d" });
};

module.exports = { registerUser, loginUser, getUser };
>>>>>>> 421c4c3a888772ec8d0216c5a71cb46d0f88add7
