const express = require("express");
const router = express.Router();

const {
    registerUser,loginUser, getUser 
  } = require("../controllers/userController");
  
const {protect} = require('../middleware/authMiddleware')

// router.route('/').get(getUser).post(createUser)
router.post("/", registerUser);
router.post("/login", loginUser);
router.post("/me", protect, getUser);

// router.route('/:id').put(updateGoal).delete(deleteGoal)


module.exports = router;
