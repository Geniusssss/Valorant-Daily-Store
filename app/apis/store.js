import axios from 'axios';
import { API_BASE_URL } from '../constants/apiURL';

export const getDailySkinsApi = (access_token, entitlements_token, puuid) => {
  return axios.post(`${API_BASE_URL}/store/skins`, {
    access_token,
    entitlements_token,
    puuid
  });
};
