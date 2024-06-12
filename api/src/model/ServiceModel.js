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
    category_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: Category,
            key: 'id'
        }
    },
    id_provider: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: Provider,
            key: 'id'
        }  
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
Service.belongsTo(Provider, { foreignKey: 'id_provider' });
Service.belongsTo(Category, {foreignKey: "category_id"})

module.exports = Service;
