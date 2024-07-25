import axios from 'axios';
import https from 'https';
import { CookieJar, Cookie } from 'tough-cookie';
import { createRiotAuthSSLContext } from '../utils/ssl.js';


const login = async (username, password) => {
    console.log("login");

    const cookieJar = new CookieJar();
    const sslContext = createRiotAuthSSLContext();
    const agent = new https.Agent({ secureContext: sslContext });

    const axiosInstance = axios.create({
        httpsAgent: agent,
        jar: cookieJar,
        withCredentials: true
    });

    const headers = {
        'Accept-Encoding': 'deflate, gzip, zstd',
        'User-Agent': '02.774 %s (Windows;10;;Professional, x64)',
        'Cache-Control': 'no-cache',
        'Accept': 'application/json'
    };

    // Helper function to update cookies
    async function updateCookies(response) {
        const setCookieHeader = response.headers['set-cookie'];
        if (setCookieHeader) {
            for (const cookie of setCookieHeader) {
                await cookieJar.setCookie(Cookie.parse(cookie).toString(), response.config.url);
            }
        }
    }

    async function getCookieHeader(url) {
        const cookies = await cookieJar.getCookies(url);
        return cookies.map(cookie => `${cookie.key}=${cookie.value}`).join('; ');
    }


    let response = await axiosInstance.post('https://auth.riotgames.com/api/v1/authorization', {
        client_id: 'play-valorant-web-prod',
        nonce: Math.random().toString(36).substring(2),
        redirect_uri: 'https://playvalorant.com/opt_in',
        response_type: 'token id_token',
        scope: 'account openid'
    }, { headers });

    if (response.status === 200 && response.data.type === 'auth') {
        await updateCookies(response);
        const cookieHeader = await getCookieHeader('https://auth.riotgames.com');
        response = await axiosInstance.put('https://auth.riotgames.com/api/v1/authorization', {
            type: 'auth',
            language: 'en_US',
            remember: true,
            username: username,
            password: password
        }, {
            headers: {
                ...headers,
                Cookie: cookieHeader
            }
        });
    } else if (response.data.type == 'multifactor') {
        throw new Error('Multifactor authentication required');
    } else {
        throw new Error('Bad Request');
    }

    if (response.status === 200 && response.data.type === 'response') {
        await updateCookies(response);
        const setCookieHeader = response.headers['set-cookie'];
        // Get ssid
        const ssidCookie = setCookieHeader.find(cookie => cookie.startsWith('ssid='));
        // Get sub
        const subCookie = setCookieHeader.find(cookie => cookie.startsWith('sub='));
        const sub = subCookie ? subCookie.split(';')[0].split('=')[1] : null;
        // Get access_token
        const uri = response.data.response.parameters.uri;
        const params = new URLSearchParams(uri.split('#')[1]);
        const access_token = params.get('access_token');

        response = await axiosInstance.post('https://entitlements.auth.riotgames.com/api/token/v1', {}, {
            headers: {
                ...headers,
                'Authorization': `Bearer ${access_token}`
            }
        });

        // Get entitlements_token
        const entitlements_token = response.data.entitlements_token;

        return {
            access_token,
            entitlements_token,
            puuid: sub,
            ssid: ssidCookie
        };

    } else if (response.status === 200 && response.data.type === 'auth') {
        throw new Error('Incorrect username or password');
    } else {
        throw new Error('Bad Request');
    }
};

const reauth = async (access_token, ssid) => {
    console.log("reauth");

    const axiosInstance = axios.create({
        maxRedirects: 0
    });

    try {
        const response = await axiosInstance.get('https://auth.riotgames.com/authorize?redirect_uri=https%3A%2F%2Fplayvalorant.com%2Fopt_in&client_id=play-valorant-web-prod&response_type=token%20id_token&nonce=1&scope=account%20openid', {
            headers: {
                'Authorization': `Bearer ${access_token}`,
                'Cookie': ssid
            }
        });
    } catch (error) {
        if (error.response.status === 303) {
            const redirectUrl = error.response.headers.location;

            const setCookieHeader = error.response.headers['set-cookie'];
            const ssidCookie = setCookieHeader.find(cookie => cookie.startsWith('ssid='));
            const params = new URLSearchParams(redirectUrl.split('#')[1]);
            const access_token = params.get('access_token');

            if (access_token === null) {
                throw new Error('Reauth failed');
            }

            return {
                access_token: access_token,
                ssid: ssidCookie
            };
        } else {
            throw new Error('Bad Request');
        }
    };
}

export default {
    login,
    reauth
};