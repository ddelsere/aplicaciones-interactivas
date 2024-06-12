const Service = require('../model/ServiceModel');


// Create a new service
const createService = async (serviceData) => { //checked
    try {
        const service = await Service.create(serviceData);
        return service;
    } catch (error) {
        throw new Error(error.message);
    }
};

// Get all services
const getAllServices = async () => { //checked
    try {
        const services = await Service.findAll();
        return services;
    } catch (error) {
        throw new Error(error.message);
    }
};

// Get a service by ID
const getServiceByIdProvider = async (id) => { //checked
    try {
        // const service = await Service.findByPk(id);
        const service = await Service.findAll({
            where: {
                id_provider: id,
            },
          });
        if (!service) {
            throw new Error('Service not found');
        }
        return service;
    } catch (error) {
        throw new Error(error.message);
    }
};

const getServiceByFilter = async (filter) => {
    try {
        // const service = await Service.findByPk(id);
        const service = await Service.findAllfindAll({
            where: {
              //TODO: agregar los filtros 
            },
          });
        if (!service) {
            throw new Error('Service not found');
        }
        return service;
    } catch (error) {
        throw new Error(error.message);
    }
};

// Update a service
const updateService = async (id, updateData) => { //checked
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

// Update a service
const deleteService = async (id, updateData) => { //TODO: AGREGAR COLUMNA ACTIVO
    try {
        const service = await Service.findByPk(id);
        updateData.active = false;
        if (!service) {
            throw new Error('Service not found');
        }
        await service.update(updateData); //baja logica
        return service;
    } catch (error) {
        throw new Error(error.message);
    }
};

module.exports = {
    createService,
    getAllServices,
    getServiceByIdProvider,
    updateService,
    deleteService
};
