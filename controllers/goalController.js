const asyncHandler = require("express-async-handler");
const Goal = require("../models/goalModel");
// @desc Get Goals
// @route Get /api/goals
// @access Private
const getGoals = asyncHandler(async (req, res) => {
  const goals = await Goal.find()

  res.status(200).json(goals );
});
// @desc Post Goals
// @route Post /api/goals
// @access Private
const createGoal = async (req, res) => {
  try {
    if (!req.body.text) {
      return res.status(400).send("Please add a text field");
    }
    
    const newGoal = await Goal.create({ text: req.body.text });
    
    res.status(201).json(newGoal);
  } catch (err) {
    res.status(500).send("Unable to save to database");
  }
};

// @desc Update Goals
// @route Put /api/goals/id
// @access Private
const updateGoal = asyncHandler(async (req, res) => {
  const goal = await Goal.findById(req.params.id)
  if (!goal) {
    res.status(400)
    throw new Error('Goal not found')
  }
  const updatedGoal = await Goal.findByIdAndUpdate(req.params.id, req.body, { new: true})
  res.status(200).json(updatedGoal);
});
// @desc Delete Goals
// @route Delete /api/goals/id
// @access Private
const deleteGoal = asyncHandler(async (req, res) => {
  const goal = await Goal.findById(req.params.id)
  if (!goal) {
    res.status(400)
    throw new Error ('Goal not Found')
  }
  await Goal.findByIdAndRemove({_id: req.params.id})
  res.status(200).json({id: req.params.id})
});

module.exports = { getGoals, createGoal, updateGoal, deleteGoal };
