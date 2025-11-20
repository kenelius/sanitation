const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const cors = require("cors");
const userRoutes = require("../backend/src/routes/userRoutes.js");
const apartmentRoutes = require("../backend/src/routes/apartmentRoutes.js");
const collectionRoutes = require("../backend/src/routes/collectionRoutes.js");
const { errorHandler } = require("../backend/src/middleware");

// Load environment variables
dotenv.config();

// Initialize express app
const app = express();

// Middleware
app.use(cors());
app.use(express.json()); // allows parsing of JSON body data

// Connect to MongoDB
mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => console.log("✅ MongoDB connected successfully"))
  .catch((err) => console.error("❌ MongoDB connection failed:", err.message));

// Basic route
app.get("/", (req, res) => {
  res.send("🌍 Sanitation API is running...");
});

// API routes
app.use("/api/users", userRoutes);
app.use("/api/apartments", apartmentRoutes);
app.use("/api/collections", collectionRoutes);

// Error handling middleware
app.use(errorHandler);

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
