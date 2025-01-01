const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const requireLogin = require("../middlewares/requireLogin");
const POST = mongoose.model("POST");
const USER = mongoose.model("USER");

router.get("/user/:_id", requireLogin, async (req, res) => {
  try {
    const user = await USER.findOne({ _id: req.params._id }).select("-password")
    if (!user) {
        return res.status(404).json({ error: "User not found" });
    } else {
        const post = await POST.find({ postedBy: req.params._id }).populate("postedBy", "_id");
        return res.status(200).json({ user, post });
    }
    
          
  } catch (err) {
    return res.status(404).json({ error: "User not found" });
  }
});

module.exports = router;
