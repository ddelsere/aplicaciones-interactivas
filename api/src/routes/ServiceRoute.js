const express = require('express');
const router = express.Router();
const serviceController = require('../controllers/ServiceController');

// Route to create a new service
router.post('/', serviceController.createService);

// Route to get all services
router.get('/', serviceController.getServices);

// Route to get a service by ID
router.get('/:id', serviceController.getServiceById);

// Route to update a service
router.put('/:id', serviceController.updateService);

// Route to delete a service
router.delete('/:id', serviceController.deleteService);

module.exports = router;