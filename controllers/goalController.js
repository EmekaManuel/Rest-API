const asyncHandler = require('express-async-handler')

// @desc Get Goals
// @route Get /api/goals
// @access Private
const getGoals =  asyncHandler( async (req, res) => {
  res.status(200).json({ message: "Get goals" });
});
// @desc Post Goals
// @route Post /api/goals
// @access Private
const createGoal = asyncHandler( async (req, res) => {
  if (!req.body.text) {
    res.status(400)
    throw new Error ("please add a text field")
  }
  res.status(200).json({ message: "Create goals" });
});
// @desc Update Goals
// @route Put /api/goals/id
// @access Private
const updateGoal = asyncHandler( async (req, res) => {
  res.status(200).json({ message: `Update goals ${req.params.id}` });
});
// @desc Delete Goals
// @route Delete /api/goals/id
// @access Private
const deleteGoal = asyncHandler( async (req, res) => {
  res.status(200).json({ message: `Delete goals ${req.params.id}` });
});

module.exports = { getGoals, createGoal, updateGoal, deleteGoal };
