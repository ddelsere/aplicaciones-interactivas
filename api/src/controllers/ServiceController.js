const serviceService = require('../services/serviceService');

// Create a new service
exports.createService = async (req, res) => {
    try {
        const service = await serviceService.createService(req.body);
        res.status(201).json(service);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// Get all services
exports.getAllServices = async (req, res) => {
    try {
        const services = await serviceService.getAllServices();
        res.status(200).json(services);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Get a service by ID
exports.getServiceById = async (req, res) => {
    try {
        const service = await serviceService.getServiceById(req.params.id);
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