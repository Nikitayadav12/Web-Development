const mongoose = require("mongoose");

const carSchema = new mongoose.Schema({
  name: { type: String, required: true },
  price: { type: String, required: true },
  quality: { type: String, required: true },
  speed: { type: String, required: true },
  yearReleased: { type: String, required: true },
});

module.exports = mongoose.model("Car", carSchema);
