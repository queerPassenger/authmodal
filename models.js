const mongoose = require("mongoose");

module.exports.User = mongoose.model("user", new mongoose.Schema({
  username:    { type: String, required: true, unique: true},
  emailId:        { type: String, required: true},
  password:     { type: String, required: true },
}));
