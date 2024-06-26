const User = require('../model/UserModel');
const Provider = require('../model/providerModel');


// Create a new user
const createUser = async (userData) => { //checked
    try {
        const user = await User.create({ ...userData});
        
        if(userData.type == "P"){
            let data = {idUser: user.id}
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
