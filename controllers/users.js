const express = require('express');
const bcrypt = require("bcryptjs");
const router = express.Router();
const User = require('../models/users.js');

//bcrypt route - need to figure out how to deal with since Z has to use bcrptyjs
router.get("/new", (req, res) => {
  res.json(req.session.user)
})

router.post("/", (req, res) => {
  req.body.password = bcrypt.hashSync(req.body.password,
  bcrypt.genSaltSync(10));
  User.create(req.body, (error, createdUser) => {
    req.session.user = createdUser;
    res.json(createdUser)
  })
})


module.exports = router;
