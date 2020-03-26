const express = require('express');
const router = express.Router();
const User = require('../models/users.js');
const bcrypt = require("bcryptjs");
//bcrypt route - need to figure out how to deal with since Z has to use bcrptyjs
router.post("/", (req, res) => {
  req.body.password = bcrypt.hashSync(req.body.password,
  bcrypt.genSaltSync(10));
  User.create(req.body, (error, createdUser) => {
    req.session.user = createdUser;
    res.json(createdUser)
  })
})


module.exports = router;
