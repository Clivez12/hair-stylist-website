const express = require("express");
const cors = require("cors");
require("dotenv").config();
const db = require("./db"); // ✅ external database connection

const app = express();
app.use(cors());  // ✅ This allows frontend requests
app.use(express.json());

// ✅ Test route
app.get("/", (req, res) => {
  res.send("Backend is running...");
});

// ✅ Route 1: Get all products
app.get("/api/products", (req, res) => {
  const sql = "SELECT * FROM products";
  db.query(sql, (err, results) => {
    if (err) {
      console.error("❌ Error fetching products:", err);
      return res.status(500).json({ error: "Failed to fetch products" });
    }
    res.json(results);
  });
});

// ✅ Route 2: Get all services
app.get("/api/services", (req, res) => {
  const sql = "SELECT * FROM services";
  db.query(sql, (err, results) => {
    if (err) {
      console.error("❌ Error fetching services:", err);
      return res.status(500).json({ error: "Failed to fetch services" });
    }
    res.json(results);
  });
});

// ✅ Route 3: Get all videos
app.get("/api/videos", (req, res) => {
  const sql = "SELECT * FROM videos";
  db.query(sql, (err, results) => {
    if (err) {
      console.error("❌ Error fetching videos:", err);
      return res.status(500).json({ error: "Failed to fetch videos" });
    }
    res.json(results);
  });
});

// ✅ Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
