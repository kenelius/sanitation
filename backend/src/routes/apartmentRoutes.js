const express = require ("express")
const {
  createApartment,
  getApartments,
  getApartmentById,
  updateApartment,
  deleteApartment,
} = require("../contoller/apartmentController");
const { protect } = require("../middleware");

const router = express.Router();

router.post("/", protect, createApartment);
router.get("/", protect, getApartments);
router.get("/:id", protect, getApartmentById);
router.put("/:id", protect, updateApartment);
router.delete("/:id", protect, deleteApartment);

module.exports = router;