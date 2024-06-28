const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const Service = require('./ServiceModel');
const User = require('./UserModel');
const Provider = require('./providerModel');


const Booking = sequelize.define('Booking', {
    message: {
        type: DataTypes.STRING(255),
        allowNull: false,
    },
    phoneNumber: {
        type: DataTypes.STRING(11),
        allowNull: false,
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            isEmail: true
        }
    },
    contactHours : {
        type: DataTypes.STRING(100),
        allowNull: false
    },
    startDate: {
        type: DataTypes.STRING(10),
        allowNull: true,
        validate: {
            isDate: true
        }
    },
    finishDate: {
        type: DataTypes.STRING(10),
        allowNull: true,
        validate: {
            isDate: true
        }
    },
    idService: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: Service,
            key: 'id'
        }
    },
    idUser: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: User,
            key: 'id'
        }
    },
    idProvider: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: Provider,
            key: 'id'
        }
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

Booking.belongsTo(User, { foreignKey: 'idUser' });
Booking.belongsTo(Service, {foreignKey: 'idService'})
Booking.belongsTo(Provider, {foreignKey: 'idProvider'});
module.exports = Booking;
