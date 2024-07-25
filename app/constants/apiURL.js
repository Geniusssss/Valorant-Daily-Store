import { Platform } from 'react-native';

const LOCAL_API_BASE_URL = 'http://192.168.0.60:3000';
const WEB_API_BASE_URL = 'http://localhost:3000';

export const API_BASE_URL = Platform.OS === 'web' ? WEB_API_BASE_URL : LOCAL_API_BASE_URL;