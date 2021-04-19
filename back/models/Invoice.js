const mongoose = require("mongoose");

const InvoiceSchema = mongoose.Schema({
	ref: [{ type: mongoose.Types.ObjectId, ref: "Product" }],
	number: { type: Number, require: true },
	totalPrice: { type: Number, require: true },
	discount: { type: Number, require: true },
	vat: { type: Number, require: true }
});

module.exports = mongoose.model("Invoice", InvoiceSchema);