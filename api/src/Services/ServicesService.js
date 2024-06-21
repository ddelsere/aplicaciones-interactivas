const Service = require('../model/ServiceModel');
const Provider = require('../model/providerModel');
const User = require('../model/UserModel');

// Create a new service
const createService = async (serviceData) => { //checked
    try {
        console.log(serviceData)
        const service = await Service.create({...serviceData, active: true, name:serviceData.category});
        return service;
    } catch (error) {
        throw new Error(error.message);
    }
};

// Get all services
const getAllServices = async () => { //checked
    try {
        const services = await Service.findAll({
            where: {
                e: true,
            },
          });
        return services;
    } catch (error) {
        throw new Error(error.message);
    }
};

// Get a service by ID
const getServiceByIdProvider = async (id) => { //checked
    try {
        
        const service = await Service.findAll({
            where: {
                idProvider: id,
                active : true
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
        console.log(filter.category);
        const whereClause = {};

        if (filter.category !== undefined) {
            whereClause.category = filter.category;
        }
        if (filter.zone !== undefined) {
            whereClause.zone = filter.zone;
        }
        if (filter.species !== undefined) {
            whereClause.species = filter.species;
        }
        if (filter.frequency !== undefined) {
            whereClause.frequency = filter.frequency;
        }
        if (filter.score !== undefined) {
            whereClause.score = { [Op.gt]: filter.score };
        }
        if (filter.startingDate !== undefined) {
            whereClause.startingDate = { [Op.lte]: filter.startingDate };
        }
        if (filter.finishDate !== undefined) {
            whereClause.finishDate = { [Op.gte]: filter.finishDate };
        }

        whereClause.active = true;

        const services = await Service.findAll({
            where: whereClause
        });
        let res = []
       for(const service of services)  {
       
            const provider =  await Provider.findByPk(service.idProvider, {include: [User]})
            let data = {service: service, user: provider.User.dataValues};
            res.push(data);
        };

        
        if (!services) {
            throw new Error('Services not found');
        }
        
        return res;
    } catch (error) {
        throw new Error(error.message);
    }
};
const getUser = async (services, idProvider) => {

}
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

// delete a service
const deleteService = async (id, updateData) => { 
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
    getServiceByFilter,
    updateService,
    deleteService
};
