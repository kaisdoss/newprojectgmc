const express = require('express');
const router = express.Router();
const Invoice = require('../models/Invoice');
const Product = require('../models/product');
const User = require('../models/user');
const authMiddleware = require('../helpers/authMiddleware');


// const jwt = require('jsonwebtoken');
// //////////

// const authHeader = req.headers['authorization']
//   const token = authHeader && authHeader.split(' ')[1]

//   if (token == null) return res.sendStatus(401)

//   jwt.verify(token, process.env.TOKEN_SECRET as string, (err: any, user: any) => {
//     console.log(err)

//     if (err) return res.sendStatus(403)

//     req.user = user


// Route Create New facture
// Path : http://localhost:3000/facture/addFacture
router.post('/addFacture',authMiddleware, (req, res) => {
  const { idProducts, number, totalPrice, discount, vat, idUsers } = req.body;
  const factureModel = new Invoice({
    idProducts,
    number,
    totalPrice,
    discount,
    vat,
    idUsers,
  });
  factureModel
    .save()
    .then((facture) => res.json(facture))
    .catch((err) => res.status(400).json({ errors: [{ msg: err }] }));
});

// Route Read All facture
// Path : http://localhost:3000/facture/allFacture
router.get('/allFacture',authMiddleware, (req, res) => {
  Invoice.find()
    .then((factures) => res.status(200).json(factures))
    .catch((err) => res.status(400).json({ errors: [{ msg: err }] }));
});

//////////////////////////

router.get('/getFacture/:id',authMiddleware, (req, res) => {
  console.log(req);
  const { id } = req.params.id;
  Db.Invoice.findById(id)
    .then((factures) => {
      Db.Product.find({ _id: { $in: factures.idProducts } }).then(
        (Products) => {
          const Result = new Object({
            number: factures.number,
            totalPrice: factures.totalPrice,
            discount: factures.discount,
            vat: factures.vat,
            date: factures.date,
            Products: Products,
          });
          res.status(200).json(Result);
        }
      );
    })
    .catch((err) => res.status(400).json({ errors: [{ msg: err }] }));
});




router.get('/getFactureV2/:id', async (req, res) => {
  try {
    const { id } = req.params.id;
    var InvoiceList = await Invoice.findById(req.params.id).exec();
    const ProductList = await Product.find({
      _id: { $in: InvoiceList.idProducts },
    }).exec();
    console.log(ProductList);
    const UserList = await User.findOne({ _id: InvoiceList.idUsers }).exec();
    console.log(UserList);
    const Result = {
      number: InvoiceList.number,
      totalPrice: InvoiceList.totalPrice,
      discount: InvoiceList.discount,
      vat: InvoiceList.vat,
      date: InvoiceList.date,
      Products: ProductList,
      User: UserList,
    };
    res.status(200).json(Result);
    // res.status(200).json(InvoiceList);
  } catch (error) {
    res.status(400).json({ errors: [{ msg: error }] });
  }
});

//Route Delete facture
// Path : http://localhost:3000/facture/deleteFacture/:id
router.delete('/deleteFacture/:id', (req, res) => {
  Invoice.findByIdAndDelete(req.params.id)
    .then((facture) => res.json(facture))
    .catch((err) => res.status(400).json({ errors: [{ msg: err }] }));
});

//Route  Update  facture
// Path : http://localhost:3000/facture/updateFacture
router.put('/updateFacture', (req, res) => {
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
