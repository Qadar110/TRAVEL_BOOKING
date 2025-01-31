const Booking = require('../models/Booking');
const Destination = require('../models/Destination');

// Create booking cusub
exports.createBooking = async (req, res) => {
  try {
    // Check haddii destination-ku jiro
    const destination = await Destination.findById(req.body.destination);
    if (!destination) {
      return res.status(404).json({
        status: 'error',
        message: 'Meeshaad rabtid ma jirto'
      });
    }

    // Check haddii kuraasta la heli karo
    if (destination.availableSeats < req.body.numberOfPeople) {
      return res.status(400).json({
        status: 'error',
        message: 'Ma jiraan kursi ku filan'
      });
    }

    // Calculate total price
    const totalPrice = destination.price * req.body.numberOfPeople;

    // Create booking
    const booking = await Booking.create({
      ...req.body,
      user: req.user.id,
      totalPrice
    });

    // Update available seats
    destination.availableSeats -= req.body.numberOfPeople;
    await destination.save();

    res.status(201).json({
      status: 'success',
      data: { booking }
    });
  } catch (error) {
    res.status(400).json({
      status: 'error',
      message: error.message
    });
  }
};

// Get dhammaan bookings-ka user-ka
exports.getMyBookings = async (req, res) => {
  try {
    const bookings = await Booking.find({ user: req.user.id })
      .populate('destination');

    res.status(200).json({
      status: 'success',
      results: bookings.length,
      data: { bookings }
    });
  } catch (error) {
    res.status(400).json({
      status: 'error',
      message: error.message
    });
  }
};

// Get dhammaan bookings-ka (Admin kaliya)
exports.getAllBookings = async (req, res) => {
  try {
    const bookings = await Booking.find()
      .populate('user', 'name email')
      .populate('destination');

    res.status(200).json({
      status: 'success',
      results: bookings.length,
      data: { bookings }
    });
  } catch (error) {
    res.status(400).json({
      status: 'error',
      message: error.message
    });
  }
};

// Update booking status (Admin kaliya)
exports.updateBookingStatus = async (req, res) => {
  try {
    const booking = await Booking.findByIdAndUpdate(
      req.params.id,
      { status: req.body.status },
      { new: true, runValidators: true }
    );

    if (!booking) {
      return res.status(404).json({
        status: 'error',
        message: 'Booking-gan ma jiro'
      });
    }

    res.status(200).json({
      status: 'success',
      data: { booking }
    });
  } catch (error) {
    res.status(400).json({
      status: 'error',
      message: error.message
    });
  }
}; 