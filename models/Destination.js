const mongoose = require('mongoose');

const destinationSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Destination name is required'],
    trim: true
  },
  description: {
    type: String,
    required: [true, 'Description is required']
  },
  price: {
    type: Number,
    required: [true, 'Price is required']
  },
  image: {
    type: String,
    required: [true, 'Image URL is required']
  },
  location: {
    type: String,
    required: [true, 'Location is required']
  },
  availableSeats: {
    type: Number,
    required: [true, 'Available seats are required']
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Destination', destinationSchema); 