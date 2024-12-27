const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const USER = mongoose.model("USER");

router.get("/", (req, res) => {
  res.send({ message: "Hello World!" });
});

router.post("/signup", (req, res) => {
  const { name, userName, email, password } = req.body;
  if(!name || !userName || !email || !password){
      return res.status(422).json({error:"Please add all the fields"})
  }

  const user = new USER({
    name,
    userName,
    email,
    password,
  });

  user.save().then((user) => {
      res.json({ message: "User Saved Successfully" });
    }).catch((err) => {
      console.log(err);
    });
});

module.exports = router;
