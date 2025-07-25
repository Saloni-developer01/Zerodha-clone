const mongoose = require("mongoose");
const { Schema } = mongoose;

const UserSchema = new Schema({
  // timestamps: true,
  username: {
    type: String,
    required: true,
    unique: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
  }
});

const User = mongoose.model("User", UserSchema);

module.exports = User;