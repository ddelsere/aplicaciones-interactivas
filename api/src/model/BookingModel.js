const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

// Define the booking model
const Booking = sequelize.define('Booking', {
    customerName: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    customerEmail: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            isEmail: true
        }
    },
    serviceId: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    bookingDate: {
        type: DataTypes.DATE,
        allowNull: false,
    },
    status: {
        type: DataTypes.STRING,
        defaultValue: 'pending',
    },
    createdAt: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW,
    },
    updatedAt: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW,
    }
}, {
    timestamps: true,
    hooks: {
        beforeUpdate: (booking, options) => {
            booking.updatedAt = new Date();
        }
    }
});

module.exports = Booking;
