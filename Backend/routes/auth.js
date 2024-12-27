const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const USER = mongoose.model("USER");
const bcrypt = require("bcrypt");

router.get("/", (req, res) => {
  res.send({ message: "Hello World!" });
});

router.post("/signup", (req, res) => {
  const { name, userName, email, password } = req.body;
  if(!name || !userName || !email || !password){
      return res.status(422).json({error:"Please add all the fields"})
  }
  USER.findOne({ $or:[{email: email},{userName: userName}] }).then((savedUser) => {
    if (savedUser) {
      return res.status(422).json({ error: "User already exists with that email or username" });
    }

    bcrypt.hash(password, 12).then((hashedpassword) => {
        const user = new USER({
            name,
            userName,
            email,
            password: hashedpassword,
          });
        
          user.save().then((user) => {
              res.json({ message: "User Saved Successfully" });
            }).catch((err) => {
              console.log(err);
            }); 
    });
  })
});

module.exports = router;
