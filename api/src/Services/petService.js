const Pet = require('../model/petModel');
const User = require('../model/UserModel');

// Create a new pet
const createPet = async (petData) => {
    try {
        const pet = await Pet.create(petData);
        return pet;
    } catch (error) {
        throw new Error(error.message);
    }
};

// Get all pets
const getAllPets = async () => {
    try {
        const pets = await Pet.findAll({
            include: [User],
        });
        return pets;
    } catch (error) {
        throw new Error(error.message);
    }
};

// Get a pet by ID
const getPetById = async (id) => {
    try {
        const pet = await Pet.findByPk(id, {
            include: [User],
        });
        if (!pet) {
            throw new Error('Pet not found');
        }
        return pet;
    } catch (error) {
        throw new Error(error.message);
    }
};

// Update a pet
const updatePet = async (id, updateData) => {
    try {
        const pet = await Pet.findByPk(id);
        if (!pet) {
            throw new Error('Pet not found');
        }
        await pet.update(updateData);
        return pet;
    } catch (error) {
        throw new Error(error.message);
    }
};

// Delete a pet
const deletePet = async (id) => {
    try {
        const pet = await Pet.findByPk(id);
        if (!pet) {
            throw new Error('Pet not found');
        }
        await pet.destroy();
        return { message: 'Pet deleted successfully' };
    } catch (error) {
        throw new Error(error.message);
    }
};

module.exports = {
    createPet,
    getAllPets,
    getPetById,
    updatePet,
    deletePet,
};
