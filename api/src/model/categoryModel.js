const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');


// Define the pet model
const Category = sequelize.define('Category', {
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    }
}, {
    timestamps: true,
    hooks: {
        beforeUpdate: (category, options) => {
            category.updatedAt = new Date();
        },
    },
});


module.exports = Category;