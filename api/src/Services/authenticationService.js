const userService = require('../services/UserService');
const User = require('../model/UserModel');

const doLogin = async (email, password) =>{
    try{
        const user = await User.findOne({
            where: {
                email: email,
                password: password
            }
        });
        console.log(user);
        if (!user) {
            throw new Error('User not found');
        }
        return user;
    } catch (error) {
        throw new Error(error.message);
    }
}

const resetPassword = async (email, password) =>{
    try{
        let user = await User.findOne({
            where: {
                email: email
            }
        });
        await user.update({...user, password: password});
        return user;
    }catch (error) {
        throw new Error(error.message);
    }
}

module.exports = {
    doLogin,
    resetPassword
};
