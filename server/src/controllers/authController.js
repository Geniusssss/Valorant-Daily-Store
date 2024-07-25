import authService from '../services/authService.js';
import responseHandler from '../utils/responseHandler.js';

const login = async (req, res) => {
    try {
        const { username, password } = req.body;
        const tokens = await authService.login(username, password);
        responseHandler(res, 200, tokens);
    } catch (error) {
        console.log('Error during authentication:', error);
        responseHandler(res, 400, { message: error.message });
    }
};

const reauth = async (req, res) => {
    try {
        const { access_token, ssid } = req.body;
        const tokens = await authService.reauth(access_token, ssid);
        responseHandler(res, 200, tokens);
    } catch (error) {
        responseHandler(res, 400, { message: error.message });
    }
};

export default {
    login,
    reauth
};