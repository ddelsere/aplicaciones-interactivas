const User = require('../model/UserModel');
const Provider = require('../model/providerModel');
// const bcrypt = require('bcrypt');

//TODO: VER QUE HACER CON LA PASSWORD A VER SI SE ENCRIPTA O ALGO

// Create a new user
const createUser = async (userData) => { //checked
    try {
        // const hashedPassword = await bcrypt.hash(userData.password, 10);
        const user = await User.create({ ...userData});
        console.log(user);
        if(userData.type == "P"){
            let data = {id_user: user.id}
            await Provider.create(data)
        }
        return user;
    } catch (error) {
        throw new Error(error.message);
    }
};

// Get all users
const getAllUsers = async () => { //checked
    try {
        const users = await User.findAll();
        return users;
    } catch (error) {
        throw new Error(error.message);
    }
};

// Get a user by ID
const getUserById = async (id) => { //checked
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
const updateUser = async (id, updateData) => { //checked
    try {
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



module.exports = {
    createUser,
    getAllUsers,
    getUserById,
    updateUser,
};
