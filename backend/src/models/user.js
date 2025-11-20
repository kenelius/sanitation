const mongoose = require ("mongoose");

const userschema = new mongoose.Schema({
 name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  role: { type: String, enum: ["resident", "collector"], default: "resident" },

});
const user = mongoose.model("user",userschema);

module.exports = user;