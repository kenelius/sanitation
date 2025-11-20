const CollectionRequest = require("../models/collectionRequest");

// CREATE
const createCollectionRequest = async (req, res) => {
  try {
    const request = await CollectionRequest.create({
      user: req.user._id,
      apartment: req.body.apartmentId,
      date: req.body.date,
      status: "Pending",
    });
    res.status(201).json(request);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// READ all
const getAllRequests = async (req, res) => {
  try {
    const requests = await CollectionRequest.find({ user: req.user._id })
      .populate("apartment", "name location");
    res.json(requests);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// READ by ID
const getRequestById = async (req, res) => {
  try {
    const request = await CollectionRequest.findById(req.params.id)
      .populate("apartment", "name location");
    if (!request) return res.status(404).json({ message: "Request not found" });
    res.json(request);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// UPDATE status
const updateRequestStatus = async (req, res) => {
  try {
    const request = await CollectionRequest.findById(req.params.id);
    if (!request) return res.status(404).json({ message: "Request not found" });

    request.status = req.body.status || request.status;
    const updated = await request.save();
    res.json(updated);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// DELETE
const deleteRequest = async (req, res) => {
  try {
    const request = await CollectionRequest.findById(req.params.id);
    if (!request) return res.status(404).json({ message: "Request not found" });

    await request.deleteOne();
    res.json({ message: "Collection request deleted" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  createCollectionRequest,
  getAllRequests,
  getRequestById,
  updateRequestStatus,
  deleteRequest,
};
