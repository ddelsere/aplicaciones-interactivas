const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const User = require('./UserModel');
const Booking = require('./BookingModel');

// Define the comment model
const Comment = sequelize.define('Comment', {
    content: {
        type: DataTypes.TEXT,
        allowNull: false,
    },
    createdAt: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW,
    },
    updatedAt: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW,
    },
}, {
    timestamps: true,
    hooks: {
        beforeUpdate: (comment, options) => {
            comment.updatedAt = new Date();
        },
    },
});

// Define associations
Comment.belongsTo(User, { foreignKey: 'userId' });
Comment.belongsTo(Booking, { foreignKey: 'bookingId' });

module.exports = Comment;
