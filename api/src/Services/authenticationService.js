const User = require('../model/UserModel');
const Provider = require('../model/providerModel');

const doLogin = async (email, password) =>{
    try{
        const user = await User.findOne({
            where: {
                email: email,
                password: password
            }
        });
        
        if (!user) {
            throw new Error('User not found');
        }
        if(user.type === "P"){
            const provider = await Provider.findOne({
                where: {
                    idUser: user.id
                },
                include: [User]
            });
            
            console.log(provider);
            return provider;
        }else{

            return user;
        }
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
