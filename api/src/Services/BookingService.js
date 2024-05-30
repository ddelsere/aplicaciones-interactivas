const Booking = require('../models/BookingModel');

// Create a new booking
const createBooking = async (bookingData) => {
    try {
        const booking = await Booking.create(bookingData);
        return booking;
    } catch (error) {
        throw new Error(error.message);
    }
};

// Get all bookings
const getAllBookings = async () => {
    try {
        const bookings = await Booking.findAll();
        return bookings;
    } catch (error) {
        throw new Error(error.message);
    }
};

// Get a booking by ID
const getBookingById = async (id) => {
    try {
        const booking = await Booking.findByPk(id);
        if (!booking) {
            throw new Error('Booking not found');
        }
        return booking;
    } catch (error) {
        throw new Error(error.message);
    }
};

// Update a booking
const updateBooking = async (id, updateData) => {
    try {
        const booking = await Booking.findByPk(id);
        if (!booking) {
            throw new Error('Booking not found');
        }
        await booking.update(updateData);
        return booking;
    } catch (error) {
        throw new Error(error.message);
    }
};

// Delete a booking
const deleteBooking = async (id) => {
    try {
        const booking = await Booking.findByPk(id);
        if (!booking) {
            throw new Error('Booking not found');
        }
        await booking.destroy();
        return { message: 'Booking deleted successfully' };
    } catch (error) {
        throw new Error(error.message);
    }
};

module.exports = {
    createBooking,
    getAllBookings,
    getBookingById,
    updateBooking,
    deleteBooking
};
