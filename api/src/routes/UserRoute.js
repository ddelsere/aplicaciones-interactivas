const express = require('express');
const userController = require('../controllers/UserController');

const router = express.Router();

router.post('/', userController.createUser);
router.get('/', userController.getAllUsers);
router.get('/:id', userController.getUserById);
router.put('/:id', userController.updateUser);

module.exports = router;