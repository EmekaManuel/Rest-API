const express = require("express");
const router = express.Router();
const {
  registerUser,
  loginUser,
  getUserData,

} = require("../controllers/userController");

const {protect} = require ('../middleware/authMiddleware')

// router.route('/').get(getGoals).post(createGoal)
router.post("/", registerUser);
router.post("/login", loginUser);
router.get("/getUserData", protect, getUserData); 

// // router.route('/:id').put(updateGoal).delete(deleteGoal)
// router.put("/:id", updateUser);
// router.delete("/:id", deleteUser);

module.exports = router;
