const express = require('express');
const router = express.Router();
const User = require('../models/users.js');
const bycrpt = require("bcryptjs");
//bcrypt route - need to figure out how to deal with since Z has to use bcrptyjs

// ===RouterRoute(POST)====
router.post("/", (req, res) => {
  User.findOne({username:req.body.username}, (error, foundUser) =>{
    if(foundUser === null){
          res.json({
              message:'user not found',
          });
      } else {
          const passwordMatch = bcrypt.compareSync(req.body.password, foundUser.password);
          if(passwordMatch){
            req.session.user = foundUser;
              res.json(foundUser)
          } else {
              res.json({
                  message:'incorrect password'
              });
          }
      }
  });
});

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
