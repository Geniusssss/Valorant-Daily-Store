import React from 'react';
import { Slot } from 'expo-router';
import { AuthProvider } from '../auth/AuthContext';

const RootLayout = () => {
  return (
    <AuthProvider>
      <Slot />
    </AuthProvider>
  );
};

export default RootLayout;
