const express = require("express");
const Clothing = require("../models/Clothing");
const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const clothing = await Clothing.find({});
    res.json(clothing);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
