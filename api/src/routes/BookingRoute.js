const express = require('express');
const bookingController = require('../controllers/BookingController');

const router = express.Router();

router.post('/', bookingController.createBooking);
router.get('/', bookingController.getAllBookings);
router.get('/:id/:userType', bookingController.getBookingByIdUser);
router.put('/:id', bookingController.updateBooking);

module.exports = router;