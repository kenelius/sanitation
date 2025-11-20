const mongoose = require ('mongoose');

const apartmentschema = new mongoose.Schema({
    name: { type: String, required: true },
    location: { type: String, required: true },
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
});

const apartment = mongoose.model('apartment',apartmentschema);

module.exports = apartment;
