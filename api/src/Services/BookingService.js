const { where } = require('sequelize');
const Booking = require('../model/BookingModel');

// Create a new booking
const createBooking = async (bookingData) => { //checked
    try {
        console.log(bookingData);
        const booking = await Booking.create({...bookingData, status: "PENDING"});
        return booking;
    } catch (error) {
        console.log(error)
        throw new Error(error.message);
    }
};

// Get all bookings - no se usa
const getAllBookings = async () => {
    try {
        const bookings = await Booking.findAll();
        return bookings;
    } catch (error) {
        throw new Error(error.message);
    }
};

// Get a booking by ID
const getBookingByIdUser = async (id, userType) => { //checked
    try {
        if(userType == "C"){
            const booking = await Booking.findAll({
                where: {
                    idUser: id
                }
            });
            if (!booking) {
                throw new Error('Booking not found');
            }
            return booking;
        }else{ //si es provider el id que se pasa es el de provider
            const booking = await Booking.findAll(
                {
                    where: {
                        idProvider: id
                    }
                    
                }
            );
            if (!booking) {
                throw new Error('Booking not found');
            }
            return booking;
        }
        
    } catch (error) {
        throw new Error(error.message);
    }
};


// Update a booking
const updateBooking = async (id, updateData) => { //checked, solo se actualiza el estado
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



module.exports = {
    createBooking,
    getAllBookings,
    getBookingByIdUser,
    updateBooking
    // deleteBooking
};
