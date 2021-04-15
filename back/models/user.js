const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  firstname: { type: String, require: true },
  lastname: { type: String, require: true },
  phone: { type: String},
  email: { type: String, require: true },
  password: { type: String, require: true },
});

module.exports = mongoose.model("User", userSchema);