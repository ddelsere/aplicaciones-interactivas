const express = require('express');
const petController = require('../controllers/PetController');

const router = express.Router();

router.post('/create', petController.createPet);
router.get('/', petController.getAllPets);
router.get('/:id', petController.getPetById);
router.put('/update/:id', petController.updatePet);
router.delete('/delete/:id', petController.deletePet);

module.exports = router;
