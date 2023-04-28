const mongoose = require("mongoose");
<<<<<<< HEAD
=======

>>>>>>> 421c4c3a888772ec8d0216c5a71cb46d0f88add7
const userSchema = mongoose.Schema(
  {
    name: {
      type: String,
<<<<<<< HEAD
      required: [true, "Please enter a name"],
    },
    email: {
      type: String,
      required: [true, "Please enter an email"],
=======
      required: [true, "Please add your name"],
    },
    email: {
      type: String,
      required: [true, "Please enter your email address"],
>>>>>>> 421c4c3a888772ec8d0216c5a71cb46d0f88add7
      unique: true,
    },
    password: {
      type: String,
<<<<<<< HEAD
      required: [true, "Please enter a password"],
    },
  },
  {
    timestamps: true,
=======
      required: [true, "Please enter a valid password"],
    },
  },
  {
    timetamps: true,
>>>>>>> 421c4c3a888772ec8d0216c5a71cb46d0f88add7
  }
);

module.exports = mongoose.model("User", userSchema);
