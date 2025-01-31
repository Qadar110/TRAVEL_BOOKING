const express = require('express');
const destinationController = require('../controllers/destinationController');
const { protect, restrictTo } = require('../middleware/auth');

const router = express.Router();

router
  .route('/')
  .get(destinationController.getAllDestinations)
  .post(
    protect, 
    restrictTo('admin'), 
    destinationController.createDestination
  );

router
  .route('/:id')
  .get(destinationController.getDestination)
  .patch(
    protect, 
    restrictTo('admin'), 
    destinationController.updateDestination
  )
  .delete(
    protect, 
    restrictTo('admin'), 
    destinationController.deleteDestination
  );

module.exports = router; 