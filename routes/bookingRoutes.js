const express = require('express');
const bookingController = require('../controllers/bookingController');
const { protect, restrictTo } = require('../middleware/auth');

const router = express.Router();

// Dhammaan routes-ka waxay u baahan yihiin authentication
router.use(protect);

router
  .route('/')
  .post(bookingController.createBooking)
  .get(bookingController.getMyBookings);

// Admin routes
router
  .route('/all')
  .get(restrictTo('admin'), bookingController.getAllBookings);

router
  .route('/:id/status')
  .patch(restrictTo('admin'), bookingController.updateBookingStatus);

module.exports = router; 