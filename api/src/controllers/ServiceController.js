const serviceService = require('../services/ServicesService');

// Create a new service
exports.createService = async (req, res) => {
    try {
        console.log(req.body);
        const service = await serviceService.createService(req.body);
        res.status(201).json(service);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// Get all services
exports.getAllServices = async (req, res) => {
    try {
        console.log(req.body);
        const services = await serviceService.getServiceByFilter(req.body);
        res.status(200).json(services);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Get a service by ID
exports.getServiceByIdProvider = async (req, res) => {
    console.log('get service by id')
    try {
        const service = await serviceService.getServiceByIdProvider(req.params.id_provider);
        res.status(200).json(service);
    } catch (error) {
        res.status(404).json({ error: error.message });
    }
};

// Update a service
exports.updateService = async (req, res) => {
    try {
        const service = await serviceService.updateService(req.params.id, req.body);
        res.status(200).json(service);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

exports.deleteService = async (req, res) => {
    try {
        const service = await serviceService.deleteService(req.params.id, req.body);
        res.status(200).json(service);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};