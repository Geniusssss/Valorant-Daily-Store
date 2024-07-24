import express from 'express';
import axios from 'axios';
import tls from 'tls';
import https from 'https';
import cors from 'cors';
import { CookieJar, Cookie } from 'tough-cookie';

const app = express();
const port = 3000;

const corsOptions = {
    origin: 'http://localhost:8081',
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    allowedHeaders: ['Content-Type', 'Authorization']
};

app.use(cors(corsOptions));
app.use(express.json());

app.post('/auth/login', async (req, res) => {
    console.log("login");
    const { username, password } = req.body;

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

    try {
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

            res.json({
                access_token,
                entitlements_token,
                puuid: sub,
                ssid: ssidCookie
            });
        } else if (response.status === 200 && response.data.type === 'auth') {
            throw new Error('Incorrect username or password');
        } else {
            throw new Error('Bad Request');
        }
    } catch (error) {
        console.log('Error during authentication:', error);
        res.status(500).json({ error: 'Authentication failed', message: error.message });
    }
});

app.post('/auth/reauth', async (req, res) => {
    console.log("reauth");
    
    const { access_token, ssid } = req.body;
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
                return res.status(500).json({ error: 'Reauth failed' });
                
            }

            res.status(200).send({
                access_token: access_token,
                ssid: ssidCookie
            });
        } else {
            res.status(400).json({ error: 'Bad Request' });
        }
    }
});

function createRiotAuthSSLContext() {
    const options = {
        minVersion: 'TLSv1',
        ciphers: [
            'TLS_CHACHA20_POLY1305_SHA256',
            'TLS_AES_128_GCM_SHA256',
            'TLS_AES_256_GCM_SHA384',
            'ECDHE-ECDSA-CHACHA20-POLY1305',
            'ECDHE-RSA-CHACHA20-POLY1305',
            'ECDHE-ECDSA-AES128-GCM-SHA256',
            'ECDHE-RSA-AES128-GCM-SHA256',
            'ECDHE-ECDSA-AES256-GCM-SHA384',
            'ECDHE-RSA-AES256-GCM-SHA384',
            'ECDHE-ECDSA-AES128-SHA',
            'ECDHE-RSA-AES128-SHA',
            'ECDHE-ECDSA-AES256-SHA',
            'ECDHE-RSA-AES256-SHA',
            'AES128-GCM-SHA256',
            'AES256-GCM-SHA384',
            'AES128-SHA',
            'AES256-SHA',
            'DES-CBC3-SHA'
        ].join(':'),
        sigalgs: [
            'ecdsa_secp256r1_sha256',
            'rsa_pss_rsae_sha256',
            'rsa_pkcs1_sha256',
            'ecdsa_secp384r1_sha384',
            'rsa_pss_rsae_sha384',
            'rsa_pkcs1_sha384',
            'rsa_pss_rsae_sha512',
            'rsa_pkcs1_sha512',
            'rsa_pkcs1_sha1'
        ].join(':')
    };
    return tls.createSecureContext(options);
}

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
