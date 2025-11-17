const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const carRoutes = require('./routes/carRoutes');

const app = express();

app.use(cors());
app.use(express.json());
app.use('/api', carRoutes);

mongoose.connect('mongodb://localhost:27017/carDB')
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log(err))
.then(() => console.log('MongoDB connected'))
.catch(err => console.log(err));

app.listen(5000, () => {
  console.log('Server running on port 5000');
});
