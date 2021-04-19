const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  firstname: { type: String, require: true },
  lastname: { type: String, require: true },
  phone: { type: String },
  email: { type: String, require: true },
  password: { type: String, require: true },
  date: {type: Date, default: Date.now()},
  role: { type: String, default: "N/A" }
});

// M: Manager
// A: Admin
// S: Stock Manager
// C: Cashier

// : MASC

module.exports = mongoose.model("user", userSchema);