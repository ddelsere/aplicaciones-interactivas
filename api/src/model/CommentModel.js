const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const User = require('./UserModel');
const Booking = require('./BookingModel');
const Service = require('./ServiceModel');

// Define the comment model
const Comment = sequelize.define('Comment', {
    content: {
        type: DataTypes.STRING(140),
        allowNull: false,
    },
    status:{
        type: DataTypes.STRING,
        allowNull: false,
    },
    id_user: {
        type: DataTypes.INTEGER,
        references: {
            model: User,
            key: 'id'
        },
        unique: true,  // Ensures one-to-one relationship
    },
    date: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW,
    },
    id_service: {
        type: DataTypes.INTEGER,
        references: {
            model: Service,
            key: 'id'
        },
        unique: true,  // Ensures one-to-one relationship
    }
}, {
    timestamps: true,
    hooks: {
        beforeUpdate: (comment, options) => {
            comment.updatedAt = new Date();
        },
    },
});

// Define associations
Comment.belongsTo(User, { foreignKey: 'id_user' });
Comment.belongsTo(Service, { foreignKey: 'id_service' });

module.exports = Comment;
