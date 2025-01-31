const Destination = require('../models/Destination');

// Get dhammaan destinations-ka
exports.getAllDestinations = async (req, res) => {
  try {
    const destinations = await Destination.find();
    
    res.status(200).json({
      status: 'success',
      results: destinations.length,
      data: { destinations }
    });
  } catch (error) {
    res.status(400).json({
      status: 'error',
      message: error.message
    });
  }
};

// Get hal destination
exports.getDestination = async (req, res) => {
  try {
    const destination = await Destination.findById(req.params.id);
    
    if (!destination) {
      return res.status(404).json({
        status: 'error',
        message: 'Ma jiro meel safar ah oo ID-gan leh'
      });
    }

    res.status(200).json({
      status: 'success',
      data: { destination }
    });
  } catch (error) {
    res.status(400).json({
      status: 'error',
      message: error.message
    });
  }
};

// Create destination cusub (Admin kaliya)
exports.createDestination = async (req, res) => {
  try {
    const destination = await Destination.create(req.body);

    res.status(201).json({
      status: 'success',
      data: { destination }
    });
  } catch (error) {
    res.status(400).json({
      status: 'error',
      message: error.message
    });
  }
};

// Update destination (Admin kaliya)
exports.updateDestination = async (req, res) => {
  try {
    const destination = await Destination.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );

    if (!destination) {
      return res.status(404).json({
        status: 'error',
        message: 'Ma jiro meel safar ah oo ID-gan leh'
      });
    }

    res.status(200).json({
      status: 'success',
      data: { destination }
    });
  } catch (error) {
    res.status(400).json({
      status: 'error',
      message: error.message
    });
  }
};

// Delete destination (Admin kaliya)
exports.deleteDestination = async (req, res) => {
  try {
    const destination = await Destination.findByIdAndDelete(req.params.id);

    if (!destination) {
      return res.status(404).json({
        status: 'error',
        message: 'Ma jiro meel safar ah oo ID-gan leh'
      });
    }

    res.status(204).json({
      status: 'success',
      data: null
    });
  } catch (error) {
    res.status(400).json({
      status: 'error',
      message: error.message
    });
  }
}; 