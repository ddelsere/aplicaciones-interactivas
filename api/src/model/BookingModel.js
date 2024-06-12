const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const Service = require('./ServiceModel');
const User = require('./UserModel');

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
        references: {
            model: Service,
            key: 'id'
        }
    },
    idUser: {
        type: DataTypes.INTEGER,
        references: {
            model: User,
            key: 'id'
        },
        unique: true,  //  one-to-one relationship
    },
    bookingDate: {
        type: DataTypes.DATE,
        allowNull: false,
    },
    status: {
        type: DataTypes.STRING,
        defaultValue: 'pending',
    }
}, {
    timestamps: true,
    hooks: {
        beforeUpdate: (booking, options) => {
            booking.updatedAt = new Date();
        }
    }
});
// Define associations
Booking.belongsTo(User, { foreignKey: 'idUser' });
Booking.belongsTo(Service, {foreignKey: 'serviceId'})

module.exports = Booking;
