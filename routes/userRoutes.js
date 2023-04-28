const express = require("express");
const router = express.Router();
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

module.exports = router;
