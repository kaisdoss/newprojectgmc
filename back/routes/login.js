const express = require('express');
const router = express.Router();
const user = require('../models/user');
const { body, validationResult } = require('express-validator');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
require('dotenv').config();

// M: Manager
// A: Admin
// S: Stock Manager
// C: Cashier
const rolesArray = ['M', 'A', 'S', 'C']

//load connected user
router.get('/', (req, res) => {
  console.log(req.user);
  user
    .findById(req.user.userId)
    .select('-password')
    .then((user) => {
      if (!user) {
        return res.status(404).json({ msg: 'User Not Found!' });
      }
      res.status(200).json(user);
    })
    .catch((err) => {
      console.error(err.message);
      res.status(500).send({ msg: 'Server Error' });
    });
});

// login user
router.post(
  '/',
  body('email', 'Please enter a valid Email!').isEmail(),
  body('password', 'Password must contain minimum 5 characters!').notEmpty(),
  (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    user.findOne({ email: req.body.email }).then((user) => {
      if (!user) {
        return res
          .status(404)
          .json({ errors: [{ msg: 'Please register before!' }] });
      }
      bcrypt.compare(req.body.password, user.password, (err, isMatch) => {
        if (err) {
          throw err
        }
        else if (!isMatch) {
          return res.status(401).json({ errors: [{ msg: 'Wrong password!' }] });
        } else {
          let payload = { userId: user._id, role: user.role };
          jwt.sign(payload, process.env.SECRET_KEY, (err, token) => {
            if (err) {
              throw err;
            }
            res.send({ token });
          });
        }
      });
    });
  }
);

module.exports = router;
