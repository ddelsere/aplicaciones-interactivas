const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const User = require('./UserModel');

// Define the provider model
const Provider = sequelize.define('Provider', {
    description_experience: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    idUser: {
        type: DataTypes.INTEGER,
        references: {
            model: User,
            key: 'id'
        },
        unique: true,  //  one-to-one relationship
    }
}, {
    timestamps: true,
    hooks: {
        beforeUpdate: (provider, options) => {
            provider.updatedAt = new Date();
        },
    },
});

// Define associations
Provider.belongsTo(User, { foreignKey: 'idUser' });

module.exports = Provider;