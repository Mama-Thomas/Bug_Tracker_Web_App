const express = require("express");
const router = express.Router();
const {
  getBugs,
  createBug,
  updateBug,
  deleteBug,
} = require("../controllers/bugController");

// Get all bugs
router.get("/", getBugs);

// Create a new bug
router.post("/", createBug);

// Update an existing bug
router.put("/:id", updateBug);

// Delete a bug
router.delete("/:id", deleteBug);

module.exports = router;
