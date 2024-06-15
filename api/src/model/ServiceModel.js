const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const Provider = require('./providerModel'); 

// Defino el Schema
const Service = sequelize.define('Service', {
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    description: {
        type: DataTypes.STRING(200),
        allowNull: false,
    },
    price: {
        type: DataTypes.FLOAT,
        allowNull: false,
        validate: {
            min: 0
        }
    },
    frequency: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    zone: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    score: {
        type: DataTypes.INTEGER,
        allowNull: true
    },
    species: {
        type: DataTypes.STRING(10),
        allowNull: false
    },
    category: {
        type: DataTypes.STRING(50),
        allowNull: false,
    },
    idProvider: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: Provider,
            key: 'id'
        }  
    }, 
    active: {
        type: DataTypes.BOOLEAN,
        allowNull: false
    }
}, {
    timestamps: true,
    hooks: {
        beforeUpdate: (service, options) => {
            service.updatedAt = new Date();
        }
    }
});


Service.belongsTo(Provider, { foreignKey: 'idProvider' });

module.exports = Service;
