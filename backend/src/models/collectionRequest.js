const mongoose = require ("mongoose");

const collectionrequestschema = new mongoose.Schema({
  apartment: { type: mongoose.Schema.Types.ObjectId, ref: "Apartment", required: true },
  status: { type: String, enum: ["pending", "collected"], default: "pending" },
  date: { type: Date, default: Date.now },
  collector: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
});

const collectionrequest = mongoose.model("collectionrequest",collectionrequestschema);

module.exports = collectionrequest;
