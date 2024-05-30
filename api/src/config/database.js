const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('database_name', 'username', 'password', {
    host: 'your_server_host',
    dialect: 'mssql',
    dialectOptions: {
        options: {
            encrypt: true // Use this if you're on Microsoft Azure
        }
    }
});

module.exports = sequelize;