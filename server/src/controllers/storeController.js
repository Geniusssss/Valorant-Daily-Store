import storeService from '../services/storeService.js';
import responseHandler from '../utils/responseHandler.js';

const getDailySkins = async (req, res) => {
    try {
        const { access_token, entitlements_token, puuid } = req.body;
        const skins = await storeService.getDailySkins(access_token, entitlements_token, puuid);
        responseHandler(res, 200, skins);
    } catch (error) {
        console.log('Error during getDailySkins:', error);
        responseHandler(res, 400, { message: error.message });
    }
};

export default {
    getDailySkins
};