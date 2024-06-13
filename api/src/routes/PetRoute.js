const express = require('express');
const petController = require('../controllers/PetController');

const router = express.Router();

router.post('/', petController.createPet);
router.get('/', petController.getAllPets);
router.get('/:id', petController.getPetByIdUser);
router.put('/:id', petController.updatePet);
router.delete('/:id', petController.deletePet);

module.exports = router;
