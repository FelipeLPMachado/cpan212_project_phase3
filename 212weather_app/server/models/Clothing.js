const mongoose = require("mongoose");
const clothingSchema = new mongoose.Schema({
  name: String,
  minTemp: Number,
  maxTemp: Number,
});
module.exports = mongoose.model("Clothing", clothingSchema);
