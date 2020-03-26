const express = require('express');
const router = express.Router();
const Drinks = require('../models/drinks.js');

//GET
router.get("/", (req, res) => {
  Drinks.find({}, (err, foundDrinks) => {
    res.json(foundDrinks);
  })
})

//POST
router.post("/", (req, res) => {
  Drinks.create(req.body, (err, createdDrinks) => {
    res.json(createdDrinks)
  })
})

//PUT

router.put("/:id", (req, res) => {
  Drinks.findByIdAndUpdate(req.params.id, req.body, {new: true}, (err, updatedDrinks) =>{
    res.json(updatedDrinks);
  })
})

//DELETE

router.put("/:id", (req, res) => {
  Drinks.findByIdAndRemove(req.params.id, (err, deletedDrinks) => {
    res.json(deletedDrinks);
  })
})

module.exports = router;
