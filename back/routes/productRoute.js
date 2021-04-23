const express = require("express");
const router = express.Router();
const Product = require("../models/product");
const authMiddleware = require("../helpers/authMiddleware");

// Route Create New product
// Path : http://localhost:3000/products/addProduct
router.post("/addProduct", authMiddleware, (req, res) => {
  const { name, number, etat, buyingPrice, price, description } = req.body;
  const ProductModel = new Product({
    name,
    number,
    etat,
    buyingPrice,
    price,
    description,
  });
  ProductModel.save()
    .then((product) => res.status(200).json(product))
    .catch((err) => res.status(400).json({ errors: [{ msg: err }] }));
});

// Route Read All product
// Path : http://localhost:3000/products/allproduct
router.get("/allProduct", authMiddleware, (req, res) => {
  Product.find()
    .then((products) => res.status(200).json(products))
    .catch((err) => res.status(400).json({ errors: [{ msg: err }] }));
});

//Route  Update  product
// Path : http://localhost:3000/products/updateProduct
router.put("/updateProduct", authMiddleware, (req, res) => {
  const { _id, name, number, etat, buyingPrice, price, description } = req.body;
  Product.findByIdAndUpdate(
    _id,
    { name, number, etat, buyingPrice, price, description },
    (err, data) => {
      if (err) {
        res.status(400).json({ errors: [{ msg: err }] });
      }
      Product.findById(_id)
        .then((product) => res.status(200).json(product))
        .catch((err) => res.status(400).json({ errors: [{ msg: err }] }));
    }
  );
});

//Route Delete product
// Path : http://localhost:3000/products/deleteproduct/:id
router.delete("/deleteproduct/:id", authMiddleware, (req, res) => {
  Product.findByIdAndDelete(req.params.id)
    .then((product) => res.status(200).json(product))
    .catch((err) => res.status(400).json({ errors: [{ msg: err }] }));
});

module.exports = router;