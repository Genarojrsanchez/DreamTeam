const express = require('express');
const router = express.Router();
const Drinks = require('../models/drinks.js');

//GET
router.get("/", (req, res) => {
  res.send("hello world");
})

//POST
router.post("/", (req, res) => {
  Drinks.create(req.body)
})
//PUT

//DELETE

module.exports = router;
