const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");
dotenv.config();
const tokens = process.env.jwtSecret;
const mongoose = require("mongoose");
const USER = mongoose.model("USER");

module.exports = (req, res, next) => {
  const { authorization } = req.headers;
  if (!authorization) {
    return res.status(401).json({ error: "You must be logged in" });
  }
  const token = authorization.replace("Bearer ", "");
  jwt.verify(token, tokens, (err, payload) => {
    if (err) {
      return res.status(401).json({ error: "You must be logged in" });
    }
    const { _id } = payload;
    USER.findById(_id).then((userData) => {
      req.user = userData;
      next();
    });
  });
};
