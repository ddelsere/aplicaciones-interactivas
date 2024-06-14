const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const User = require('./UserModel');
const Service = require('./ServiceModel');

// Define the comment model
const Comment = sequelize.define('Comment', {
    message: {
        type: DataTypes.STRING(140),
        allowNull: false,
    },
    score: {
        type: DataTypes.INTEGER,
        allowNull: true
    },
    status:{
        type: DataTypes.STRING,
        allowNull: false,
    },
    idUser: {
        type: DataTypes.INTEGER,
        references: {
            model: User,
            key: 'id'
        }
    },
    date: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW,
    },
    idService: {
        type: DataTypes.INTEGER,
        references: {
            model: Service,
            key: 'id'
        }
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
Comment.belongsTo(User, { foreignKey: 'idUser' });
Comment.belongsTo(Service, { foreignKey: 'idService' });

module.exports = Comment;
