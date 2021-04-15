const mongoose = require("mongoose");

const ProductSchema = mongoose.Schema({
  name: { type: String, require: true },
  Number: { type: Number, require: true },
  price: { type: Number, require: true },
  description: { type: String },
});

module.exports = mongoose.model("Product", ProductSchema);