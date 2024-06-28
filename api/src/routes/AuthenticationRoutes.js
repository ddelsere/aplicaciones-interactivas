const express = require('express');
const router = express.Router();
const authController = require('../controllers/AuthenticationController');


router.get('/login', authController.login);
router.put('/login/reset-password', authController.resetPassword);

module.exports = router;