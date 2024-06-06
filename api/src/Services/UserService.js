const User = require('../models/UserModel');
const bcrypt = require('bcrypt');

//TODO: VER QUE HACER CON LA PASSWORD A VER SI SE ENCRIPTA O ALGO

// Create a new user
const createUser = async (userData) => {
    try {
        const hashedPassword = await bcrypt.hash(userData.password, 10);
        const user = await User.create({ ...userData, password: hashedPassword });
        return user;
    } catch (error) {
        throw new Error(error.message);
    }
};

// Get all users
const getAllUsers = async () => {
    try {
        const users = await User.findAll();
        return users;
    } catch (error) {
        throw new Error(error.message);
    }
};

// Get a user by ID
const getUserById = async (id) => {
    try {
        const user = await User.findByPk(id);
        if (!user) {
            throw new Error('User not found');
        }
        return user;
    } catch (error) {
        throw new Error(error.message);
    }
};

// Update a user
const updateUser = async (id, updateData) => {
    try {
        if (updateData.password) {
            updateData.password = await bcrypt.hash(updateData.password, 10);
        }
        const user = await User.findByPk(id);
        if (!user) {
            throw new Error('User not found');
        }
        await user.update(updateData);
        return user;
    } catch (error) {
        throw new Error(error.message);
    }
};

// Delete a user
const deleteUser = async (id) => {
    try {
        const user = await User.findByPk(id);
        if (!user) {
            throw new Error('User not found');
        }
        await user.destroy();
        return { message: 'User deleted successfully' };
    } catch (error) {
        throw new Error(error.message);
    }
};

module.exports = {
    createUser,
    getAllUsers,
    getUserById,
    updateUser,
    deleteUser,
};
