const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('pataguarda', 'admin', 'admin', {
    host: 'localhost', // o la IP/URL de tu servidor SQL Server
    dialect: 'mssql', // Especifica que estás usando SQL Server
    dialectOptions: {
        options: {
            encrypt: false, // Si necesitas encriptar la conexión
            trustServerCertificate: true, // Si estás usando un certificado auto-firmado
        },
    },
    logging: false, // Puedes desactivar el logging si no lo necesitas
});

module.exports = sequelize;