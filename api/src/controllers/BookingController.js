const bookingService = require('../services/BookingService.js');

// Create a new booking
exports.createBooking = async (req, res) => { //checked
    try {
        console.log(req.body)
        const booking = await bookingService.createBooking(req.body);
        res.status(201).json(booking);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// Get all bookings
exports.getAllBookings = async (req, res) => { //no se usa, sacarla
    try {
        const bookings = await bookingService.getAllBookings();
        res.status(200).json(bookings);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Get a booking by ID user
exports.getBookingByIdUser = async (req, res) => { //checked
    try {
        const booking = await bookingService.getBookingByIdUser(req.params.id, req.params.userType);
        res.status(200).json(booking);
    } catch (error) {
        res.status(404).json({ error: error.message });
    }
};



// Update a booking
exports.updateBooking = async (req, res) => { //checked
    try {
        const booking = await bookingService.updateBooking(req.params.id, req.body);
        res.status(200).json(booking);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

