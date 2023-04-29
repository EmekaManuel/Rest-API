const express = require("express");
const router = express.Router();
const {
  getGoals,
  updateGoal,
  createGoal,
  deleteGoal,
} = require("../controllers/goalController");

const { protect } = require("../middleware/authMiddleware");
// router.route('/').get(getGoals).post(createGoal)
router.get("/", protect, getGoals);
router.post("/", protect, createGoal);

// router.route('/:id').put(updateGoal).delete(deleteGoal)
router.put("/:id", protect, updateGoal);
router.delete("/:id", protect, deleteGoal);

module.exports = router;
