import axios from 'axios';
import { API_BASE_URL } from '../constants/apiURL';

export const loginApi = (username, password) => {
  return axios.post(`${API_BASE_URL}/auth/login`, {
    username,
    password
  });
};

export const reauthApi = (access_token, ssid) => {
  return axios.post(`${API_BASE_URL}/auth/reauth`, {
    access_token,
    ssid
  });
};

