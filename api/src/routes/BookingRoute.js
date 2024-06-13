const express = require('express');
const bookingController = require('../controllers/BookingController');

const router = express.Router();

router.post('/', bookingController.createBooking);
router.get('/', bookingController.getAllBookings);
router.get('/:id/:userType', bookingController.getBookingByIdUser);
// router.get('/:idProvider', bookingController.getBookingByIdProvider);
router.put('/:id', bookingController.updateBooking);
// router.delete('/:id', bookingController.deleteBooking);

module.exports = router;