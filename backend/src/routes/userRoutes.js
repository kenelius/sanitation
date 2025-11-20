const express = require("express");
const {
  registerUser,
  loginUser,
  getUsers,
  getUserById,
  updateUser,
  deleteUser,
} = require("../contoller/userController");
const { protect } = require("../middleware");

const router = express.Router();

// Create
router.post("/register", registerUser);

// Login (authentication)
router.post("/login", loginUser);

// Read
router.get("/", protect, getUsers);        // Get all users (optional: admin only)
router.get("/:id", protect, getUserById);  // Get user by ID

// Update
router.put("/:id", protect, updateUser);

// Delete
router.delete("/:id", protect, deleteUser);

module.exports = router;
