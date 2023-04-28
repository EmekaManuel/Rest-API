const mongoose = require("mongoose");

const goalSchema = mongoose.Schema(
  {
    // this stopped my post requests for the goal route
    user: {
      type: mongoose.Schema.Types.ObjectId,
      require: [true, "Please are you a user"],
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
