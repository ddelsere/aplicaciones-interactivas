const express = require('express');
const router = express.Router();
const authController = require('../controllers/AuthenticationController');

// Route for logging in
router.get('/login', authController.login);

// Route for resetting password
router.put('/login/reset-password', authController.resetPassword);

module.exports = router;