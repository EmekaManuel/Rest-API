const mongoose = require("mongoose");

const goalSchema = mongoose.Schema(
  {
<<<<<<< HEAD
    // this stopped my post requests for the goal route
    user: {
      type: mongoose.Schema.Types.ObjectId,
      require: [true, "Please are you a user"],
=======
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
>>>>>>> 421c4c3a888772ec8d0216c5a71cb46d0f88add7
      ref: 'User'
    },
    text: {
      type: String,
      require: [true, "Please add a text"],
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Goal", goalSchema);
