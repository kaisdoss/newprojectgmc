const mongoose = require("mongoose");

const InvoiceSchema = mongoose.Schema({
  idProduct: [{ type: mongoose.Types.ObjectId, ref: "Product" }],
  number: { type: Number, require: true },
  totalPrice: { type: Number, require: true },
  discount: { type: Number, require: true },
  vat: { type: Number, require: true },
  date: {type: Date, default: Date.now()},
});

module.exports = mongoose.model("Invoice", InvoiceSchema);
