const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const User = require('./UserModel');

// Define the pet model
const Pet = sequelize.define('Pet', {
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    species: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    userId: {
        type: DataTypes.INTEGER,
        references: {
            model: User,
            key: 'id'
        }
    }
}, {
    timestamps: true,
    hooks: {
        beforeUpdate: (pet, options) => {
            pet.updatedAt = new Date();
        },
    },
});

// Define associations
Pet.belongsTo(User, { foreignKey: 'userId' });

module.exports = Pet;