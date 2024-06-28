const { DataTypes, INTEGER, CHAR } = require('sequelize');
const sequelize = require('../config/database');


const User = sequelize.define('User', {
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    surname : {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
            isEmail: true,
        },
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    phoneNumber: {
        type: DataTypes.STRING(11),
        allowNull: false,
    },
    address: {
        type: DataTypes.STRING,
        allowNull: false
    },
    type: {
        type: DataTypes.CHAR(1), // P:proveedor, C:cliente
        allowNull: false,
    }
}, {
    timestamps: true,
    hooks: {
        beforeUpdate: (user, options) => {
            user.updatedAt = new Date();
        },
    },
});

module.exports = User;
