const Apartment = require("../models/apartment");

// CREATE
const createApartment = async (req, res) => {
  try {
    const apartment = await Apartment.create({
      name: req.body.name,
      location: req.body.location,
      user: req.user._id,
    });
    res.status(201).json(apartment);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// READ all
const getApartments = async (req, res) => {
  try {
    const apartments = await Apartment.find({ user: req.user._id });
    res.json(apartments);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// READ by ID
const getApartmentById = async (req, res) => {
  try {
    const apartment = await Apartment.findById(req.params.id);
    if (!apartment) return res.status(404).json({ message: "Apartment not found" });
    res.json(apartment);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// UPDATE
const updateApartment = async (req, res) => {
  try {
    const apartment = await Apartment.findById(req.params.id);
    if (!apartment) return res.status(404).json({ message: "Apartment not found" });

    apartment.name = req.body.name || apartment.name;
    apartment.location = req.body.location || apartment.location;
    

    const updated = await apartment.save();
    res.json(updated);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// DELETE
const deleteApartment = async (req, res) => {
  try {
    const apartment = await Apartment.findById(req.params.id);
    if (!apartment) return res.status(404).json({ message: "Apartment not found" });

    await apartment.deleteOne();
    res.json({ message: "Apartment deleted" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = { createApartment, getApartments, getApartmentById, updateApartment, deleteApartment };