const express = require('express');
const userController = require('../controllers/UserController');

const router = express.Router();

router.post('/create', userController.createUser);
router.get('/', userController.getAllUsers);
router.get('/:id', userController.getUserById);
router.put('/update/:id', userController.updateUser);
router.delete('/delete/:id', userController.deleteUser);

module.exports = router;