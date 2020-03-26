const express = require('express');
const router = express.Router();
const User = require('../models/users.js');
//bcrypt route - need to figure out how to deal with since Z has to use bcrptyjs

// ===RouterRoute(POST)====


// ======GetSessionRoute======
router.get("/", (req, res) => {
  res.json(req.session.user);
})

// ======DeleteSessionRoute=====
router.delete("/", (req,res) => {
  req.session.destroy(() => {
    res.json({
      destroyed: true
    })
  })
})


module.exports = router;
