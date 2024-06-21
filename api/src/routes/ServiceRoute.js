const express = require('express');
const router = express.Router();
const serviceController = require('../controllers/ServiceController');

router.post('/', serviceController.createService);
router.get('/', serviceController.getAllServices); //por filtro
router.get('/:id_provider', serviceController.getServiceByIdProvider);
router.put('/:id', serviceController.updateService);
router.delete('/:id', serviceController.deleteService);
router.get('/:id/s', serviceController.getServiceId); //BORRAR

module.exports = router;