import React, { useState, useEffect } from 'react';
import { Text, TextInput, Pressable, View, StyleSheet, ActivityIndicator } from 'react-native';
import { useRouter } from 'expo-router';
import useAuth from '../hooks/useAuth';

const LoginScreen = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const { user, login, reauth } = useAuth();
  const router = useRouter();

  useEffect(() => {
    const userReauth = async () => {
      if (user) {
        setIsLoading(true);
        const reauthResult = await reauth();
        if (reauthResult) {
          router.push('/user/store');
        } else {
          setErrorMessage('Session expired, please log in again.');
        }
      }
      setIsLoading(false);
    };
    userReauth();
  }, [user]);

  const handleLogin = async () => {
    setIsLoading(true);
    const loginResult = await login(username, password);
    setIsLoading(false);
    if (loginResult === 'success') {
      router.push('/user/store');
    } else {
      setErrorMessage(loginResult);
    }
  };

  return (
    <View style={styles.container}>
      <View style={[styles.overlay, isLoading && styles.overlayVisible]}>
        {isLoading && <ActivityIndicator size="large" color="#ffffff" />}
      </View>
      {errorMessage !== '' && <Text style={styles.errorText}>{errorMessage}</Text>}
      <Text style={styles.label}>Username:</Text>
      <TextInput
        style={styles.input}
        value={username}
        onChangeText={setUsername}
      />
      <Text style={styles.label}>Password:</Text>
      <TextInput
        style={styles.input}
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <Pressable style={styles.button} onPress={handleLogin} disabled={isLoading}>
        <Text style={styles.buttonText}>Login</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 16,
  },
  errorText: {
    color: 'red',
    marginBottom: 16,
    textAlign: 'center',
  },
  label: {
    marginBottom: 8,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 16,
    paddingHorizontal: 8,
  },
  button: {
    backgroundColor: '#007bff',
    padding: 10,
    alignItems: 'center',
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1,
    display: 'none',
  },
  overlayVisible: {
    display: 'flex',
  },
});

export default LoginScreen;