const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const Provider = require('./providerModel'); // Importa el modelo de Usuario
const Category = require('./categoryModel');

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
    duration: {
        type: DataTypes.FLOAT, // 
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
    idCategory: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: Category,
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

// Define the relationship
//Provider.hasMany(Provider, { foreignKey: 'provider_id' });
Service.belongsTo(Provider, { foreignKey: 'idProvider' });
Service.belongsTo(Category, {foreignKey: "idCategory"})

module.exports = Service;
