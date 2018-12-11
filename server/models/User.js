const mongoose = require("mongoose");

const { Schema } = mongoose;

const UserSchema = new Schema({
  googleId: String,
  firstName: {
    type: String,
    minLength: [2, "First Name must be at least 2 characters long"],
    maxLength: [22, "Must be not longer then 22 characters"],
    required: [true, "Field cannot be empty."]

  },
  lastName: {
    type: String,
    minLength: [2, "Last Name must be at least 2 characters long."],
    maxLength: [22, "Must be not longer then 22 characters."],
    required: [true, "Field cannot be empty."]
  },
  email: {
    type: String,
    required: [true, "Field cannot be empty."]
  },
  password: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    default: Date.now()
  }
});

module.exports = User = mongoose.model("users", UserSchema);
