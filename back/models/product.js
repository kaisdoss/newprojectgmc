const mongoose = require("mongoose");

const ProductSchema = mongoose.Schema({
  name: { type: String, require: true },
  number: { type: Number, require: true },
  etat: {
    type: String,
    enum: ["en stock", "hors stock"],
    default: "en stock",
  },

  buyingPrice: { type: Number },
  price: { type: Number, require: true },
  description: { type: String },
});

module.exports = mongoose.model("Product", ProductSchema);
