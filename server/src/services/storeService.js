import axios from 'axios';
import fs from 'fs/promises';

const getDailySkins = async (access_token, entitlements_token, puuid) => {
    console.log("getDailySkins");

    const axiosInstance = axios.create({
        maxRedirects: 0
    });

    const response = await axiosInstance.get(`https://pd.ap.a.pvp.net/store/v2/storefront/${puuid}`, {
        headers: {
            'X-Riot-ClientPlatform': 'ew0KCSJwbGF0Zm9ybVR5cGUiOiAiUEMiLA0KCSJwbGF0Zm9ybU9TIjogIldpbmRvd3MiLA0KCSJwbGF0Zm9ybU9TVmVyc2lvbiI6ICIxMC4wLjE5MDQyLjEuMjU2LjY0Yml0IiwNCgkicGxhdGZvcm1DaGlwc2V0IjogIlVua25vd24iDQp9',
            'X-Riot-ClientVersion': 'release-09.01-shipping-21-2669223',
            'X-Riot-Entitlements-JWT': entitlements_token,
            'Authorization': `Bearer ${access_token}`
        }
    });

    if (response.status === 200 && response.data) {
        const uuids = response.data.SkinsPanelLayout.SingleItemOffers;

        // Read JSON file
        const filePath = new URL('../data/skins.json', import.meta.url);
        const data = await fs.readFile(filePath, 'utf8');
        const skinsDataBase = JSON.parse(data).data;

        const findSkinByUUID = (uuid) => {
            return skinsDataBase.find((skin) => skin.levels.some((level) => level.uuid === uuid));
        };
        
        const skinsPromises = uuids.map((uuid) => findSkinByUUID(uuid));
        const skinsData = await Promise.all(skinsPromises);

        return skinsData;
    } else {
        throw new Error('Unexpected Valorant API response');
    }
}

export default {
    getDailySkins
};