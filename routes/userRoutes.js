const express = require("express");
const router = express.Router();
<<<<<<< HEAD
const {
  registerUsers,
  loginUser,
  getUserData,

} = require("../controllers/userController");

// router.route('/').get(getGoals).post(createGoal)
router.post("/", registerUsers);
router.post("/login", loginUser);
router.get("/getUserData", getUserData); 

// // router.route('/:id').put(updateGoal).delete(deleteGoal)
// router.put("/:id", updateUser);
// router.delete("/:id", deleteUser);
=======

const {
    registerUser,loginUser, getUser 
  } = require("../controllers/userController");
  
const {protect} = require('../middleware/authMiddleware')

// router.route('/').get(getUser).post(createUser)
router.post("/", registerUser);
router.post("/login", loginUser);
router.post("/me", protect, getUser);

// router.route('/:id').put(updateGoal).delete(deleteGoal)

>>>>>>> 421c4c3a888772ec8d0216c5a71cb46d0f88add7

module.exports = router;
