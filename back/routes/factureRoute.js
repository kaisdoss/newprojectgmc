const express = require("express");
const router = express.Router();
const Invoice = require("../models/Invoice");
const authMiddleware = require("../helpers/authMiddleware");

// Route Create New facture
// Path : http://localhost:3000/facture/addFacture
router.post("/addFacture", authMiddleware, (req, res) => {
  const { idProduct, number, totalPrice, discount, vat } = req.body;
  const factureModel = new Invoice({
    idProduct,
    number,
    totalPrice,
    discount,
    vat,
  });
  factureModel
    .save()
    .then((facture) => res.json(facture))
    .catch((err) => res.status(400).json({ errors: [{ msg: err }] }));
});

// Route Read All facture
// Path : http://localhost:3000/facture/allFacture
router.get("/allFacture", authMiddleware, (req, res) => {
  Invoice.find()
    .then((factures) => res.status(200).json(factures))
    .catch((err) => res.status(400).json({ errors: [{ msg: err }] }));
});

//Route Delete facture
// Path : http://localhost:3000/facture/deleteFacture/:id
router.delete("/deleteFacture/:id", authMiddleware, (req, res) => {
  Invoice.findByIdAndDelete(req.params.id)
    .then((facture) => res.json(facture))
    .catch((err) => res.status(400).json({ errors: [{ msg: err }] }));
});

//Route  Update  facture
// Path : http://localhost:3000/facture/updateFacture
router.put("/updateFacture", authMiddleware, (req, res) => {
  const { id, idProduct, number, totalPrice, discount, vat } = req.body;
  Invoice.findByIdAndUpdate(
    id,
    {
      idProduct,
      number,
      totalPrice,
      discount,
      vat,
    },
    (err, data) => {
      if (err) {
        res.status(400).json({ errors: [{ msg: err }] });
      }
      Invoice.findById(id)
        .then((facture) => res.status(200).json(facture))
        .catch((err) => res.status(400).json({ errors: [{ msg: err }] }));
    }
  );
});

module.exports = router;
