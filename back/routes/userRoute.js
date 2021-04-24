const express = require("express");
const authMiddleware = require("../helpers/authMiddleware");
const User = require("../models/user");
const router = express.Router();

router.get("/loadpersonnel/:id", authMiddleware, (req, res) => {
    const id = req.params._id;
    User.findById(id)
      .then((pers) => {
        res.status(200).json(pers);
      })
      .catch((err) => res.status(400).json({ errors: [{ msg: err }] }));
  });

  module.exports = router;