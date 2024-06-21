const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const User = require('./UserModel');


const Pet = sequelize.define('Pet', {
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    species: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    idUser: {
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


Pet.belongsTo(User, { foreignKey: 'idUser' });

module.exports = Pet;