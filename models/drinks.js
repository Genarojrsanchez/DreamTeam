const mongoose = require('mongoose');

const drinkSchema = new mongoose.Schema({
  name: String,
  instructions: String,
  ingredients:
    {
      ingOne: String,
      ingTwo: String,
      ingThree: String,
      ingFour: String
    }
});

const Drinks = mongoose.model('Drinks', drinkSchema);

module.exports = Drinks; 
