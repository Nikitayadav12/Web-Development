// routes/carRoutes.js
const express = require('express');
const router = express.Router();
const Car = require('../models/Car');


router.get('/cars', async (req, res) => {
  try {
    const cars = await Car.find();
    res.status(200).json(cars);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching cars', error });
  }
});

module.exports = router;

