const express = require("express");
const {
  createCollectionRequest,
  getAllRequests,
  getRequestById,
  updateRequestStatus,
  deleteRequest,
} = require("../contoller/collectionController");
const { protect } = require("../middleware");

const router = express.Router();

router.post("/", protect, createCollectionRequest);
router.get("/", protect, getAllRequests);
router.get("/:id", protect, getRequestById);
router.put("/:id", protect, updateRequestStatus);
router.delete("/:id", protect, deleteRequest);

module.exports = router;
