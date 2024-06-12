const petService = require('../services/petService');

// Create a new pet
exports.createPet = async (req, res) => {
    try {
        const pet = await petService.createPet(req.body);
        res.status(201).json(pet);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// Get all pets
exports.getAllPets = async (req, res) => {
    try {
        const pets = await petService.getAllPets();
        res.status(200).json(pets);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Get a pet by ID
exports.getPetById = async (req, res) => {
    try {
        const pet = await petService.getPetById(req.params.id);
        res.status(200).json(pet);
    } catch (error) {
        res.status(404).json({ error: error.message });
    }
};

// Update a pet
exports.updatePet = async (req, res) => {
    try {
        const pet = await petService.updatePet(req.params.id, req.body);
        res.status(200).json(pet);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// Delete a pet
exports.deletePet = async (req, res) => {
    try {
        await petService.deletePet(req.params.id);
        res.status(200).json({ message: 'Pet deleted successfully' });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};
