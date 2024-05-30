const Service = require('../models/serviceModel');

// Create a new service
const createService = async (serviceData) => {
    try {
        const service = await Service.create(serviceData);
        return service;
    } catch (error) {
        throw new Error(error.message);
    }
};

// Get all services
const getAllServices = async () => {
    try {
        const services = await Service.findAll();
        return services;
    } catch (error) {
        throw new Error(error.message);
    }
};

// Get a service by ID
const getServiceById = async (id) => {
    try {
        const service = await Service.findByPk(id);
        if (!service) {
            throw new Error('Service not found');
        }
        return service;
    } catch (error) {
        throw new Error(error.message);
    }
};

// Update a service
const updateService = async (id, updateData) => {
    try {
        const service = await Service.findByPk(id);
        if (!service) {
            throw new Error('Service not found');
        }
        await service.update(updateData);
        return service;
    } catch (error) {
        throw new Error(error.message);
    }
};

module.exports = {
    createService,
    getAllServices,
    getServiceById,
    updateService
};
