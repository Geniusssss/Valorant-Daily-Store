import React, { createContext, useState, useEffect } from 'react';
import { setItem, getItem, removeItem } from '../components/storage';
import { loginApi, reauthApi } from '../apis/auth';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(false);

  useEffect(() => {
    const loadUser = async () => {
      try {
        const [accessToken, entitlementsToken, puuid, ssid] = await Promise.all([
          getItem('accessToken'),
          getItem('entitlementsToken'),
          getItem('puuid'),
          getItem('ssid')
        ]);

        if (accessToken && entitlementsToken && puuid && ssid) {
          setUser(true);
        } else {
          setUser(false);
          console.log('No user');
        }
      } catch (e) {
        setUser(false);
        console.error('Failed to load user:', e);
      }
    };

    loadUser();
  }, []);


  const login = async (username, password) => {
    try {
      const response = await loginApi(username, password);

      if (response.status === 200) {
        const { access_token: accessToken, entitlements_token: entitlementsToken, puuid, ssid } = response.data;
        setUser(true);
        await Promise.all([
          setItem('accessToken', accessToken),
          setItem('entitlementsToken', entitlementsToken),
          setItem('puuid', puuid),
          setItem('ssid', ssid)
        ]);
        return 'success';
      } else {
        throw new Error('Unexpected response');
      }
    } catch (error) {
      setUser(false);
      await Promise.all([
        removeItem('accessToken'),
        removeItem('entitlementsToken'),
        removeItem('puuid'),
        removeItem('ssid')
      ]);

      if (error.response.status === 400) {
        // Incorrect username or password
        // Multifactor authentication required
        // Bad Request
        return error.response.data.message;
      } else {
        return 'Unexpected response';
      }
    }
  };

  const reauth = async () => {
    const [accessToken, entitlementsToken, puuid, ssid] = await Promise.all([
      getItem('accessToken'),
      getItem('entitlementsToken'),
      getItem('puuid'),
      getItem('ssid')
    ]);

    if (!user || !accessToken || !ssid || !entitlementsToken || !puuid) {
      setUser(false);
      return false;
    }

    try {
      const response = await reauthApi(accessToken, ssid);

      if (response.status === 200) {
        const { access_token: accessToken, ssid } = response.data;
        setUser(true);
        await Promise.all([
          setItem('accessToken', accessToken),
          setItem('ssid', ssid)
        ]);
        return true;
      } else {
        throw new Error('Unexpected response');
      }
    } catch (error) {
      setUser(false);
      await Promise.all([
        removeItem('accessToken'),
        removeItem('entitlementsToken'),
        removeItem('puuid'),
        removeItem('ssid')
      ]);

      return false;
    }
  };


  const logout = async () => {
    setUser(false);
    await Promise.all([
      removeItem('accessToken'),
      removeItem('entitlementsToken'),
      removeItem('puuid'),
      removeItem('ssid')
    ]);
  };

  return (
    <AuthContext.Provider value={{ user, login, reauth, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
