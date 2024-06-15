const authService = require('../services/authenticationService');

exports.login = async (req, res) => {
  try{
    const { email, password } = req.query;
//devuleve el usuario logueado 
    const user = await authService.doLogin(email, password);
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
  
exports.resetPassword = async (req, res) => {
    const { email, password } = req.body;
    await authService.resetPassword(email, password);
    res.status(200).json({ email, password });
  };
  
